import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipesService: RecipesService,
              private storageService: DataStorageService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipesChanged
      .subscribe( (curRecs) => {
        this.recipes = curRecs;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}