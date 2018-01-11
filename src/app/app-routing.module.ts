import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/project/welcome/welcome.component';
import { RecipesComponent } from './components/project/recipes/recipes.component';
import { ShoppingListComponent } from './components/project/shopping-list/shopping-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RecipeDetailComponent } from './components/project/recipes/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './components/project/recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './components/project/recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthGuard } from './components/auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelectedComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    // hardcoded paths must be declared first, then come the routes with dynamic parameters
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]} // will determine in the component whether edit mode or not
  ]},

  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '**', component: ErrorPageComponent, data: {message: 'Page not found, sorry :-('}},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}