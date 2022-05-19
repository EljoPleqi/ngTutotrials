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
  userCreatedCardType = '';
  userCreatedCardImgPath = '';
  userCreatedCardName = '';
  userCreatedCardDesc = '';
  userCreatedCardAtk = 0;
  userCreatedCardDef = 0;

  @Output() cardCreated = new EventEmitter<{
    type: string;
    imgPath: string;
    name: string;
    desc: string;
    atk: number;
    def: number;
  }>();

  @Output() cardHasBeenDrawn = new EventEmitter<{
    type: string;
    imgPath: string;
    name: string;
    desc: string;
    atk: number;
    def: number;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onCreateCard() {
    this.cardCreated.emit({
      type: this.userCreatedCardType,
      imgPath: this.userCreatedCardImgPath,
      name: this.userCreatedCardName,
      desc: this.userCreatedCardDesc,
      atk: this.userCreatedCardAtk,
      def: this.userCreatedCardDef,
    });
  }
  onDrawCard() {
    const card = data[Math.floor(Math.random() * 3)];

    this.cardHasBeenDrawn.emit({
      type: card.type,
      imgPath: card.imgPath,
      name: card.name,
      desc: card.desc,
      atk: card.atk,
      def: card.def,
    });
  }

  onCardCreationPanel() {
    console.log(data);
    this.visible = !this.visible;
  }
}
