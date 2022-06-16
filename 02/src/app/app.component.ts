import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeView: string = 'Recipes';
  title = '02';

  switch(selected: string) {
    this.activeView = selected;
  }
}
