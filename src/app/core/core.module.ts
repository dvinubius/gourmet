import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ReactiveFormsModule } from '@angular/forms';


import { RecipesService } from '../recipes/recipes.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

import { AuthService } from '../auth/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    WelcomeComponent,
    ErrorPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    WelcomeComponent,
    ErrorPageComponent,
    AppRoutingModule
  ],
  providers: [RecipesService,
              ShoppingListService,
              DataStorageService,
              AuthService]
})
export class CoreModule { }