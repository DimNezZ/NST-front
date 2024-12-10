import { Injectable } from '@angular/core';

export interface Event {
  name: string,
  date: string,
  timeStart: string,
  timeEnd: string
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[] = [];

  getEvent() {
    return this.events

  }
  addEvent(event: Event) {
    this.events.push(event);
  }
}
