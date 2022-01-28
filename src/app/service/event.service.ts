import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
    getAll() : Event[] {
      return [
        {
          name: 'Campus Festival',
          date: '2019.jul.26',
          time: '16pm',
          location: {address: 'address', city: 'Debrecen', country: 'Magyarország'}
        },
        {
          name: 'Volt Festival',
          date: '2019.jun.21',
          time: '16pm',
          location: {address: 'address', city: 'Sopron', country: 'Magyarország'}
        },
        {
          name: 'Balaton Sound',
          date: '2019.jun.29',
          time: '16pm',
          location: {address: 'address', city: 'Szamárdi', country: 'Magyarország'}
        }
      ]
    }
}
