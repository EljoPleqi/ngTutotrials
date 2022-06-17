import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-book',
  templateUrl: './recipes-book.component.html',
  styleUrls: ['./recipes-book.component.css'],
})
export class RecipesBookComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}

  displaySelected(event) {
    this.selectedRecipe = event;
    console.log(event);
  }
}
