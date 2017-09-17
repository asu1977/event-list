import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventService } from "./event/event.service";
import { EventItemComponent } from './event/event-item/event-item.component';
import { AppRoutingModule } from "./app-routing.module";
import { NewEventComponent } from './event/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventEditComponent,
    EventListComponent,
    EventItemComponent,
    NewEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
