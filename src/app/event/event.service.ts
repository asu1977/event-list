import { EventItem } from "./event.model";
import { Subject } from "rxjs/Subject";
import { Filter } from './filter.model';

export class EventService {
  id: number;
  eventsChanged = new Subject<EventItem[]>();
  startedEditing = new Subject<number>();
  events: EventItem [] = [
    new EventItem('2017-09-02', '2017-09-05', 'testA'),
    new EventItem('2017-09-02', '2017-09-15', 'testB'),
  ];
  filter: Filter = new Filter(); 

  getEvents() {
    return this.events.slice();
  }

  getEvent(index: number) {
    return this.events[index];
  }

  addEvent(event: EventItem) {
    this.events.push(event);
    this.eventsChanged.next(this.events.slice());
  }

  updateEvents(index: number, newEvent: EventItem) {
    this.events[index] = newEvent;
    this.eventsChanged.next(this.events.slice());
  }

  deleteEvents(index: number) {
    this.events.splice(index, 1);
    this.eventsChanged.next(this.events.slice());
  }

}