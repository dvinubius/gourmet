import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/project/header/header.component';
import { RecipesComponent } from './components/project/recipes/recipes.component';
import { RecipeListComponent } from './components/project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/project/shopping-list/shopping-edit/shopping-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownDirective } from './directives/dropdown.directive';
import { WelcomeComponent } from './components/project/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NoRecipeSelectedComponent } from './components/project/recipes/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './components/project/recipes/recipe-edit/recipe-edit.component';
import { RecipesService } from './components/project/recipes/recipes.service';
import { ShoppingListService } from './components/project/shopping-list/shopping-list.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './components/project/shared/data-storage.service';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    WelcomeComponent,
    ErrorPageComponent,
    NoRecipeSelectedComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RecipesService, ShoppingListService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
