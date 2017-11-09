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
      'https://picsum.photos/200/300/?random'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'https://picsum.photos/200/300/?random'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'https://picsum.photos/200/300/?random'
    ),
    new Recipe(
      'Test Recipe',
      'This is simply a test, no magical recipe here... yet!',
      'https://picsum.photos/200/300/?random'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
