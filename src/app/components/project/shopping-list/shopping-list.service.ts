import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class ShoppingListService {
  @Output() contentChanged = new EventEmitter<Ingredient[]>();
  // also possible to use:
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

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

  registerIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.contentChanged.emit(this.getIngredients());
    // also possible: this.listService.ingredientAdded.emit(newIngredient);
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
  }
}
