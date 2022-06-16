import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() activeNav = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setActiveNav(e) {
    this.activeNav.emit(e.target.innerHTML);
  }
}
