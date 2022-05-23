import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { default as data } from '../../db/dummy-data.json';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent implements OnInit {
  visible = false;

  // user custom cards
  userCard = {
    type: '',
    race: '',
    imgPath: '',
    name: '',
    desc: '',
    atk: 0,
    def: 0,
  };

  @Output() cardCreated = new EventEmitter<{
    type: string;
    race: string;
    imgPath: string;
    name: string;
    desc: string;
    atk: number;
    def: number;
  }>();

  @Output() cardHasBeenDrawn = new EventEmitter<{
    type: string;
    race: string;
    imgPath: string;
    name: string;
    desc: string;
    atk: number;
    def: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onCreateCard() {
    this.cardCreated.emit(this.userCard);
  }
  onDrawCard() {
    const card = data[Math.floor(Math.random() * 4)];

    this.cardHasBeenDrawn.emit(card);
  }

  onCardCreationPanel() {
    console.log(data);
    this.visible = !this.visible;
  }
}
