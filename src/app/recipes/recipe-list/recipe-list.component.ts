import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { FeatureState } from '../store/recipe.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRecipes from '../store/recipe.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesState: Observable<fromRecipes.State>;

  constructor(private store: Store<FeatureState>) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
  }
}
