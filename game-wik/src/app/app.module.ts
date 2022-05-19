import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDeckComponent } from './hero-deck/hero-deck.component';
import { CreateCardComponent } from './hero-deck/create-card/create-card.component';

@NgModule({
  declarations: [AppComponent, HeroDeckComponent, CreateCardComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
