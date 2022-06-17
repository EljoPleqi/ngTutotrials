import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  onEventCreated(eventData: Event) {
    this.events.push(eventData);
  }

  constructor() {}

  ngOnInit(): void {}
}
