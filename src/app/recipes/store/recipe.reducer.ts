import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { AppState } from '../../store/app.reducers';

export type RecipeActions = SetRecipes | AddRecipe | UpdateRecipe | DeleteRecipe | StoreRecipes | FetchRecipes;

export interface FeatureState extends AppState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
  editedRecipe: null;
}

// for the reducer
const initialState: State = {
  recipes: [
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
  ],
  editedRecipe: null
};


export function recipeReducer(state = initialState, action: RecipeActions) {
  switch (action.type) {
    case SET_RECIPES: {
      return {
        ...state,
        recipes: [...action.payload]
      };
    }
    case ADD_RECIPE: {
      return {
        ... state,
        recipes: [...state.recipes,
                  action.payload]
      };
    }
    case UPDATE_RECIPE: {
      const newRecipesArray = [...state.recipes];
      const recipeClone = {
        ...state.recipes[action.payload.index],
        ...action.payload.recipe
      };
      newRecipesArray[action.payload.index] = recipeClone;
      return {
        ...state,
        recipes: newRecipesArray
      };
    }
    case DELETE_RECIPE: {
      const newRecipesArray = [...state.recipes];
      newRecipesArray.splice(action.payload, 1);
      return {
        ...state,
        recipes: newRecipesArray
      };
    }
    default: {
      return state;
    }
  }
}

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const STORE_RECIPES = 'STORE_RECIPES';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor (public payload: Recipe[]) {}
}
export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor (public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor (public payload: {index: number, recipe: Recipe}) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor (public payload: number) {}
}
export class StoreRecipes implements Action {
  readonly type = STORE_RECIPES;
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}


