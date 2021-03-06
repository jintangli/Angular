import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientAdded.subscribe(
      (ingredient: Ingredient) => {
        this.ingredients = this.shoppinglistService.getIngredients();
      }
    );
  }

}
