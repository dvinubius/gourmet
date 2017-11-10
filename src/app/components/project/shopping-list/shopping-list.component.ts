import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('honey jar', 2),
    new Ingredient('bread loaf', 3),
    new Ingredient('coconut flakes pack', 4),
    new Ingredient('dates pack', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
