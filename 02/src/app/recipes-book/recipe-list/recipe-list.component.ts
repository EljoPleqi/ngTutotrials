import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Whooper Meal',
      'Whooper patty with a large drink and large fries',
      'https://images.unsplash.com/photo-1603614550145-c7bb90bbfddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
    ),
    new Recipe(
      'Instant Pot Mac and Cheese',
      'What’s easier—and way better—than instant mac and cheese? Rich, creamy, homemade Instant Pot mac and cheese!',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2020/instant-pot-mac-and-cheese-8.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1610374934&s=2870d70bc5aaf7e4173b8aad5b9c63c9'
    ),
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
