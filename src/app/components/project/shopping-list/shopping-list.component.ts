import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.subscription = this.listService.contentChanged.subscribe((newIngredients) => {
      this.ingredients = newIngredients;
    });
  }

  ngOnDestroy() {
    // gotta unsubscribe explicitly
    this.subscription.unsubscribe();
  }

  editIngredient(ingredient: Ingredient, index: number) {
    this.listService.startedEditing.next(index);
  }
}
