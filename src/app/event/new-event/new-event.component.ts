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
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  @ViewChild('f') eeForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedEventIndex: number;
  newEvent: EventItem = new EventItem('', '', '');
  inValidEvent: boolean;
  id: number;

  constructor(private eventService: EventService, 
              private route: ActivatedRoute,
              private router: Router
             ) {}

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       const index = +params['id']
    //       console.log(index);
    //       this.editedEventIndex = index;
    //       this.editMode = params['id'] != null;
    //       this.editedEvent = this.eventService.getEvent(index);

    //     }
    //   );
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
    this.newEvent = new EventItem(value.startDate, value.endDate, value.name);
    this.eventService.addEvent(this.newEvent);
    // this.editMode = false;
    // form.reset();
    // console.log(newEvent)
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
