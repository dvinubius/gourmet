import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipesService } from '../recipes/recipes.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipesService,
              private shoppingListService: ShoppingListService,
              private authService: AuthService) { }

  storeRecipes(): Observable<any> {
    const token = this.authService.getToken();

    return this.http.put('https://food-lovers-b7063.firebaseio.com/recipes.json?auth=' + token,
                  this.recipeService.getRecipes());
  }

  fetchRecipes(): Observable<any> {
    const token = this.authService.getToken();

    return this.http.get('https://food-lovers-b7063.firebaseio.com/recipes.json?auth=' + token)
                      .map( res => {
                        const recipes = res.json();
                        for (const recipe of recipes) {
                          if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                          }
                        }
                        return recipes;
                      });
  }

  storeShoppingList(): Observable<any> {
    return this.http.put('https://food-lovers-b7063.firebaseio.com/shopping-list.json',
                  this.shoppingListService.getIngredients());
  }
}
