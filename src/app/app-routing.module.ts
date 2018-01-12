import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'signin', loadChildren: './auth/auth.module#AuthModule'},
  {path: '**', component: ErrorPageComponent, data: {message: 'Page not found, sorry :-('}},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }