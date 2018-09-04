import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeItem:  Recipe;
  isItemSelected = false;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeItemSelected.subscribe(
      (recipe: Recipe) => {
        this.isItemSelected = true;
        this.recipeItem = recipe;
      }
    );
  }

}
