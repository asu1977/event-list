import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { EventItem } from "../event.model";
import { EventService } from "../event.service";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  @ViewChild('f') eeForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedEventIndex: number;
  editedEvent: EventItem;
  inValidEvent: boolean;
  id: number;

  constructor(private eventService: EventService, 
              private route: ActivatedRoute,
              private router: Router
             ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const index = +params['id']
          console.log(index);
          this.editedEventIndex = index;
          this.editMode = params['id'] != null;
          this.editedEvent = this.eventService.getEvent(index);

        }
      );
  }

  // ngOnInit() {
  //   this.eventService.startedEditing.next(this.eventService.id)
  //   this.subscription = this.eventService.startedEditing
  //     .subscribe(
  //       (index: number) => {
  //         // console.log('test');
  //         this.editedEventIndex = index;
  //         this.editMode = true;
  //         this.editedEvent = this.eventService.getEvent(index);
  //         this.eeForm.setValue({
  //           startDate: this.editedEvent.startDate,
  //           endDate: this.editedEvent.endDate,
  //           name: this.editedEvent.name
  //         })
  //       }
  //     );
  //   this.id = this.eventService.id;
  //   // setTimeout(this.onTest(), 1000);
  // }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newEvent = new EventItem(value.startDate, value.endDate, value.name);
    if (this.editMode) {
      this.eventService.updateEvents(this.editedEventIndex, newEvent);
    } else {
      this.eventService.addEvent(newEvent);
    }
    this.editMode = false;
    form.reset();
  }

  isValid(form: NgForm) {
    const value = form.value;
    if (value.startDate > value.endDate) {
      this.inValidEvent = true;
    } else {
      this.inValidEvent = false;
    }
  }

  onClear() {
    // this.eeForm.reset();
    this.editMode = false;
    this.router.navigate(['/events'])
  }

}
