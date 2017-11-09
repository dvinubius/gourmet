import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1201p124-chicken-piccata-x.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
