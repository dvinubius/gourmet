import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
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

const appRoutes: Routes = [
  {path: '', component: ProjectComponent},
  {path: 'recipes', component: ProjectComponent },
  {path: 'shopping-list', component: ProjectComponent}
];

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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
