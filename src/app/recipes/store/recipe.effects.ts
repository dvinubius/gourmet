import { Injectable } from '@angular/core';
import * as fromRecipes from '../store/recipe.reducer';
import { Effect } from '@ngrx/effects';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
import { Recipe } from '../recipe.model';
import { FeatureState } from '../store/recipe.reducer';
import { Store } from '@ngrx/store';


@Injectable()
export class RecipesEffects {
  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<FeatureState>) {}

  @Effect({dispatch: false})
  recipesStore = this.actions$
          .ofType(fromRecipes.STORE_RECIPES)
          .withLatestFrom(this.store.select('recipes'))
          .switchMap( ([action, state]) => {
            const req = new HttpRequest('PUT',
                                        'https://food-lovers-b7063.firebaseio.com/recipes.json', 
                                        state.recipes,
                                        {reportProgress: true});
            return this.httpClient.request(req);
          });


  @Effect()
  recipesFetch = this.actions$
          .ofType(fromRecipes.FETCH_RECIPES)
          .switchMap( (action: fromRecipes.FetchRecipes) =>
                        this.httpClient.get<Recipe[]>('https://food-lovers-b7063.firebaseio.com/recipes.json')
                    )
          .map( recipes => {
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return {
              type: fromRecipes.SET_RECIPES,
              payload: recipes
            };
          });
}