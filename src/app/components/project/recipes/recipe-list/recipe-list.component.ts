import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(clickedRecipe: Recipe) {
    this.recipeSelected.emit(clickedRecipe);
  }
}
