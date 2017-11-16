import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is simply a test, no magical recipe here... yet!',
      '../../../../assets/images/demo-list-image.jpg'
    ),
    new Recipe(
      'Recipe 2',
      'This is the second test.',
      '../../../../assets/images/demo-list-image.jpg'
    ),
    new Recipe(
      'Another Recipe',
      'By now we shold be using some real data. ',
      '../../../../assets/images/demo-list-image.jpg'
    ),
    new Recipe(
      'Recipe 4',
      'Once again, this is simply a test, no magical recipe here... yet!',
      '../../../../assets/images/demo-list-image.jpg'
    )
  ];

  getRecipes() {
    // return a new array, an exact copy of the service object's array.
    return this.recipes.slice();
  }

  constructor() { }

}
