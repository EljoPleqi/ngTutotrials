import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDeckComponent } from './hero-deck/hero-deck.component';
import { CreateCardComponent } from './hero-deck/create-card/create-card.component';
import { CardComponent } from './hero-deck/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LifepointsComponent } from './lifepoints/lifepoints.component';
import { EnemyComponent } from './enemy/enemy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDeckComponent,
    CreateCardComponent,
    CardComponent,
    LifepointsComponent,
    EnemyComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
