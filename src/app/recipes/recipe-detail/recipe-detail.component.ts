import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.reducer';
import * as fromRecipes from '../store/recipe.reducer';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  disableAdd;
  recipesState: Observable<fromRecipes.State>;
  id: number; // keep this as source of truth, not including it in the 'recipes' FeatureState

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipes.FeatureState>) { }

  ngOnInit() {
    this.disableAdd = false;
    this.route.params.subscribe( (par) => {
      this.id = +par['id'];
      this.recipesState = this.store.select('recipes');
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.disableAdd = false;
  }

  toShoppingList() {
    if (this.disableAdd) { // do nothing, ingredients already added
      return;
    }
    // else - add ingredients via the dispatcher
    this.store.select('recipes')
      .take(1)
      .subscribe((selectedState: fromRecipes.State) => {
        this.store.dispatch(
            new ShoppingListActions.AddIngredients(
              selectedState.recipes[this.id].ingredients
            )
        );
        this.disableAdd = true;
        // confirm
        window.alert('Ingredients (optimistically) added to Shopping List!');
      });
  }

  onDeleteClicked() {
    this.store.dispatch(new fromRecipes.DeleteRecipe(this.id));
    // go away, away, I say
    this.router.navigate(['../'], {relativeTo : this.route});
  }
}
