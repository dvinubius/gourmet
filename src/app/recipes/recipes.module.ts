import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth-guard.service';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    NoRecipeSelectedComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, RecipesRoutingModule, SharedModule],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [RecipesComponent]
})
export class RecipesModule { }