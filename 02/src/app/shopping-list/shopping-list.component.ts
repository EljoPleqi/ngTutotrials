import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cheese', 2),
    new Ingredient('beef', 150),
  ];

  constructor() {}

  ngOnInit(): void {}
}
