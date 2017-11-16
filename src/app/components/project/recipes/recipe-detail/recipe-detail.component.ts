import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  disableAdd;

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.disableAdd = false;
  }

  toShoppingList() {
    if (this.disableAdd) { // do nothing, ingredients already added
      return;
    }
    // else - add ingredients via the service
    this.listService.addIngredients(this.recipe.ingredients);
    this.disableAdd = true;
    // confirm
    window.alert('Ingredients added to Shopping List!');
  }
}
