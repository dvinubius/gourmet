import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesChosen = new EventEmitter<boolean>();

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipesService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSelect(link: string) {
    this.recipesChosen.emit(link === 'recipes');
  }

  onSaveClicked() {
    this.dataStorageService.storeRecipes()
            .subscribe( (res) => {
              console.log('saved recipes on server: ', res);
            });
    this.dataStorageService.storeShoppingList()
            .subscribe( (res) => {
              console.log('saved shopping list on server: ', res);
            });
  }
  onFetchClicked() {
    this.dataStorageService.fetchRecipes()
            .subscribe( recs => {
              console.log('fetched from server: ', recs);
              this.recipeService.receiveRecipes(recs);
            });
  }
  
  onLogout() {
    this.authService.logout();
  }
}
