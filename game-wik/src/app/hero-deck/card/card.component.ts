import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../hero-card/hero-card-model';
import { faShield, faWandMagic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  shield = faShield;
  swords = faWandMagic;
  @Input() card: Card;
  constructor() {}

  ngOnInit(): void {}
}
