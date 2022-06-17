import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  event = {
    title: '',
    desc: '',
    attnd: 0,
    address: '',
  };
  @Output() eventCreated = new EventEmitter<{
    title: string;
    desc: string;
    attnd: number;
    address: string;
  }>();

  constructor() {}
  onCreateEvent() {
    this.eventCreated.emit(this.event);
  }

  ngOnInit(): void {}
}
