import { Event } from './../../model/event';
import { EventService } from 'src/app/service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList!: Event[]

  constructor(private eventService: EventService) {
    this.eventList = eventService.getAll();
   }

  ngOnInit(): void {
  }

}
