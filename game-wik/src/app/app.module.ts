import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroDeckComponent } from './hero-deck/hero-deck.component';
import { CreateCardComponent } from './hero-deck/create-card/create-card.component';

@NgModule({
  declarations: [AppComponent, HeroDeckComponent, CreateCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
