import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{_

  recipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  // onRecipeItemSelected(recipe: Recipe) {
  //   this.recipeItemSelected.emit(recipe);
  // }
}
