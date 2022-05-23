import { Component, OnInit } from '@angular/core';
import { Card } from './hero-card/hero-card-model';

@Component({
  selector: 'app-hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.css'],
})
export class HeroDeckComponent implements OnInit {
  cards: Card[] = [];

  onCardDrawn(cardData: Card) {
    this.cards.push(cardData);
  }

  constructor() {}

  ngOnInit(): void {}
}
