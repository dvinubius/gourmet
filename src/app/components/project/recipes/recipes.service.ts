import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class RecipesService {
  recipesChanged: Subject<Recipe[]> = new Subject();
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

  receiveRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }

  getRecipes() {
    // return a new array, an exact copy of the service object's array.
    return this.recipes.slice();
  }

  constructor(private listService: ShoppingListService,
              private http: Http) { }

  addToShoppingList(ingredients: Ingredient[]) {
    this.listService.addIngredients(ingredients);
  }

  // USE: load correct recipe in recipe-detail component according to id-param in route
  getRecipeById(id) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
