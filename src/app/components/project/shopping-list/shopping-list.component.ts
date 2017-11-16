import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[];
  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.listService.contentChanged.subscribe(() => {
      // update my contents
      this.ingredients = this.listService.getIngredients();
    });

    // also possible to do it this way:
    // this.listService.ingredientAdded.subscribe((ing) => {
    //     this.ingredients.push(ing);
    // });
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
