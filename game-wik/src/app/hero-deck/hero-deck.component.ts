import { Component, OnInit } from '@angular/core';
import { Card } from './hero-card/hero-card-model';

@Component({
  selector: 'app-hero-deck',
  templateUrl: './hero-deck.component.html',
  styleUrls: ['./hero-deck.component.css'],
})
export class HeroDeckComponent implements OnInit {
  cards: Card[] = [
    new Card(
      'knight',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgMxPkVHPgJEL7qarW6PeRMjjNjrMLBOA_vJCX8xaSexhjSTokP09VNp5s2K4fE3cGCI&usqp=CAU',
      'Knight',
      'A person upon whom the nonhereditary dignity of knighthood is conferred by a sovereign because of personal merit ',
      2,
      2
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
