import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifepoints',
  templateUrl: './lifepoints.component.html',
  styleUrls: ['./lifepoints.component.css'],
})
export class LifepointsComponent implements OnInit {
  @Input() lifepoints: number = 45;

  constructor() {}

  ngOnInit(): void {}
}
