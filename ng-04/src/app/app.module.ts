import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { ListEventsComponent } from './event/list-events/list-events.component';
import { CreateEventComponent } from './event/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventComponent,
    ListEventsComponent,
    CreateEventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
