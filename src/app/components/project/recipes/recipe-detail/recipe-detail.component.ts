import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  disableAdd;
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.disableAdd = false;
    this.route.params.subscribe( (par) => {
      this.id = +par['id'];
      this.recipe = this.recipesService.getRecipeById(this.id);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.disableAdd = false;
  }

  toShoppingList() {
    if (this.disableAdd) { // do nothing, ingredients already added
      return;
    }
    // else - add ingredients via the service
    this.recipesService.addToShoppingList(this.recipe.ingredients);
    this.disableAdd = true;
    // confirm
    window.alert('Ingredients (optimistically) added to Shopping List!');
  }

  onDeleteClicked() {
    this.recipesService.deleteRecipe(this.id);
    // go away, away, I say
    this.router.navigate(['../'], {relativeTo : this.route});
  }
}
