import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    const newIngredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    };
    this.addedIngredient.emit(newIngredient);
  }
}
