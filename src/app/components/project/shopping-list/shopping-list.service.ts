import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ShoppingListService {
  contentChanged: Subject<Ingredient[]> = new Subject();
  startedEditing: Subject<number> = new Subject();
  // editor will subscribe to it, ingredient list will inform it about selections

  ingredients: Ingredient[] = [
    new Ingredient('honey jar', 2),
    new Ingredient('bread loaf', 3),
    new Ingredient('coconut flakes pack', 4),
    new Ingredient('dates pack', 1)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // returns a copy
  }

  getIngredient(index) {
    return this.ingredients[index];
  }

  registerIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.contentChanged.next(this.getIngredients());
  }

  addIngredients(ings: Ingredient[]) {
    ings.forEach((addedIng) => {

      // look for the ingredient in the existing list
      let found = false;
      this.ingredients.forEach((ing) => {
        if (ing.name === addedIng.name) {
          found = true;
          ing.amount += addedIng.amount;
        }
      });
      if (!found) { // need to add it to the list
        this.ingredients.push(addedIng);
      }
    });

    this.contentChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.contentChanged.next(this.getIngredients());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.contentChanged.next(this.getIngredients());
  }
}
