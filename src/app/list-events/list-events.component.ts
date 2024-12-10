import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { EventsService, Event } from '../events.service';

@Component({
  selector: 'app-list-events',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {
  EventService = inject(EventsService);
  DateEventContol = new FormControl('', Validators.required);
  TimeStartEventControl = new FormControl('', Validators.required);
  TimeEndEventControl = new FormControl('', Validators.required);
  NameEventControl = new FormControl('', Validators.required)
  FormEvent = new FormGroup({
    DateEventContol: this.DateEventContol,
    TimeStartEventControl: this.TimeStartEventControl,
    TimeEndEventControl: this.TimeEndEventControl,
    NameEventControl: this.NameEventControl,
  })

  submit() {
    if (this.FormEvent.valid) {
      const newEvent: Event = {
        name: this.NameEventControl.value!,
        date: this.DateEventContol.value!,
        timeStart: this.TimeStartEventControl.value!,
        timeEnd: this.TimeEndEventControl.value!
      };

      this.EventService.addEvent(newEvent);
      this.FormEvent.reset();
    }
  }

  removeEvent(index: number) {
    const events = this.EventService.getEvent();
    events.splice(index, 1);
  }

}
