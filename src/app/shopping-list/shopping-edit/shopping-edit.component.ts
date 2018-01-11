import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('submitButton') submitButton;
  private editedIngredient: Ingredient;
  private ingredientForm: FormGroup;
  private subscription: Subscription;
  private triedSubmit = false;

  private editMode = false;
  private editedItemIndex: number;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, this.forbiddenAmounts])
    });
    this.subscription = this.listService.startedEditing
      .subscribe((index) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedIngredient = this.listService.getIngredient(index);
        this.ingredientForm.setValue({
          ingredientName: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.triedSubmit = true;
    if (!this.ingredientForm.valid) {
      return;
    }

    const ing = this.ingredientForm.value;
    const newIngredient = new Ingredient(ing.ingredientName, ing.amount);

    if (!this.editMode) {
      this.listService.registerIngredient(newIngredient);
    } else {
      this.listService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    this.onClear();
  }

  forbiddenAmounts(control: FormControl): {[errorCode: string]: boolean} {
    if (control.value <= 0) {
      return {forbiddenAmounts: true};
    }
    // else
    return null;
  }

  onDelete() {
    if (!this.editMode) {
      return;
    } else {
      this.listService.removeIngredient(this.editedItemIndex);
      this.onClear();
    }
  }

  onClear() {
    this.editMode = false;
    this.ingredientForm.reset();
    this.triedSubmit = false;
  }
}
