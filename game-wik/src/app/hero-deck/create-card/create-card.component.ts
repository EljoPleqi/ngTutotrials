import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent implements OnInit {
  visible = false;
  constructor() {}

  ngOnInit(): void {}

  onCardDraw() {
    this.visible = !this.visible;
  }
}
