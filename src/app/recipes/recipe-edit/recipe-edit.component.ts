import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  index: number;
  editMode = false; // component checks whether it's editing an existing recipe or creating a new one
  recipeForm: FormGroup;
  triedSubmit = false;
  imagePath: string;
  anyIngredients = false;

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      par => {
        this.index = +par['id'];
        this.editMode = par['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let name = '';
    let description = '';
    let imagePath = '';
    const ingredientsArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipeById(this.index);
      name = recipe.name;
      description = recipe.description;
      imagePath = recipe.imagePath;
      recipe.ingredients.forEach(ing => {
        const group = new FormGroup({
          name: new FormControl(ing.name, Validators.required),
          amount: new FormControl(ing.amount, [Validators.required,
                                            Validators.pattern(/^[1-9]+[0-9]*$/)])
        });
        ingredientsArray.push(group);
      });
    }

    this.recipeForm = new FormGroup({
      name : new FormControl(name, Validators.required),
      description : new FormControl(description, Validators.required),
      imagePath : new FormControl(imagePath, Validators.required),
      ingredients : ingredientsArray
    });

    this.changedIngredients();
  }

  addIngredientClicked() {
    const ing = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required,
                                    Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(ing);
    this.changedIngredients();
  }

  removeIngredientClicked(index) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    this.changedIngredients();
  }

  onSubmit() {
    this.triedSubmit = true;
    if (!this.recipeForm.valid) {
      return;
    }

    const recipeVal = this.recipeForm.value;
    if (this.editMode) {
      // update edited Ingredient
      this.recipesService.updateRecipe(this.index, recipeVal);
    } else {
      // add new Ingredient
      this.recipesService.addRecipe(recipeVal);
    }

    // navigate away, comes a better day
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancelClicked() {
    // away, away, of we go, yay
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  changedIngredients() {
    if ((<FormArray>this.recipeForm.get('ingredients')).length > 0) {
      this.anyIngredients = true;
    } else {
      this.anyIngredients = false;
    }
  }
}
