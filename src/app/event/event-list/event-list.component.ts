import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { EventItem } from '../event.model';
import { EventService } from "../event.service";
import { Filter } from '../filter.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit, OnDestroy{
  @ViewChild('f') eeForm: NgForm;
  events: EventItem[];
  newEvents: EventItem[];
  private subscription: Subscription;
  filter: Filter;

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.subscription = this.eventService.eventsChanged
      .subscribe(
        (events: EventItem[]) => {
          this.events = events;
        }
      )
    this.filter = this.eventService.filter
  }

  onAdd() {
    this.router.navigate(['/event']);
  }

  onFilter(form: NgForm) {
    const value = form.value;
    const startDate = value.sDate;
    const endDate = value.eDate;
    console.log(startDate, endDate);
    this.newEvents = [];
    if (this.events)
      for (let item of this.events) {
        if (item.startDate > startDate 
            && item.endDate < endDate) {
              this.newEvents.push(item)
              console.log(item)
            }
      }
    this.events = this.newEvents;
    
  }

  offFilter() {
    this.events = this.eventService.getEvents()
    console.log(this.events)
  }

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}
