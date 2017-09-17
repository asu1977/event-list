import { Component, OnInit, Input } from '@angular/core';

import { EventItem } from "../event.model";
import { Router } from '@angular/router';
import { EventService } from "../event.service";

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: EventItem;
  @Input() index: number;

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
  }

  onEditEvent(index: number) {
    // this.eventService.id = index;
    // this.eventService.startedEditing.next(index);
    this.router.navigate(['/event', index]);
  }


  onDelete() {
    this.eventService.deleteEvents(this.index);
  }

}
