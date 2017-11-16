import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Juicy Steaks',
      'This is simply a test, no magical recipe here... yet!',
      'https://www.omahasteaks.com/gifs/252x252/fi004.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Sauce', 1)]
    ),
    new Recipe(
      'Schnitzel',
      'Guess what. Go on, guess.',
      'https://ohmydish.com/wp-content/uploads/2016/01/Traditional-German-Schnitzel-square.jpg',
      [new Ingredient('Meat', 3), new Ingredient('Lemon Slice', 1)]
    ),
    new Recipe(
      'Burger',
      'No comment. No recipe description.',
      'https://d36wnpk9e3wo84.cloudfront.net/menu-item-images/400/web-butter-burger-deluxe-double.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bread Buns', 2)]
    ),
    new Recipe(
      'Rainbow Cake',
      'No sugar, no fat, no fun at all. Just a nice picture',
      'https://www.fergusonplarre.com.au/media/catalog/product' +
          '/cache/1/image/550x/9df78eab33525d08d6e5fb8d27136e95/b/i/birthday-pinata-cake--inside.jpg',
      [new Ingredient('Photographic paper', 1),
        new Ingredient('Confidence', 100),
        new Ingredient('Imagination', 1)]
    )
  ];

  getRecipes() {
    // return a new array, an exact copy of the service object's array.
    return this.recipes.slice();
  }

  constructor() { }

}
