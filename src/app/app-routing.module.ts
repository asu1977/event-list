import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from "./event/event-list/event-list.component";
import { NewEventComponent } from './event/new-event/new-event.component';
import { EventEditComponent } from "./event/event-edit/event-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'event', component: NewEventComponent },
  { path: 'event/:id', component: EventEditComponent },
  { path: '**', component: EventListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
