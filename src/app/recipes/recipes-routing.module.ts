import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NoRecipeSelectedComponent } from './no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeRoutes: Routes  = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelectedComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    // hardcoded paths must be declared first, then come the routes with dynamic parameters
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]} // will determine in the component whether edit mode or not
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }