import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() itemRecipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
