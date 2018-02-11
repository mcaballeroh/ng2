import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  // this makes a property optional in case the api (or whatever) does not return it at all
  // checkInDate?: number,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [(ngModel)]="name">
      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>

      <h3>Airline Passengers</h3>

      <ul *ngIf="passengers.length > 0">
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [class.checked-in]="passenger.checkedIn">
          </span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in Date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            <!-- passenger.children?.length: safe navigator operator, cool thing -->
            Children: {{ passenger.children?.length || 0}}
          </div>
        </li>
      </ul>

      <h3>Airline Passengers</h3>
      <ul *ngIf="passengers.length > 0">
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngClass]="{ 'checked-in' : passenger.checkedIn,
            'checked-out' : !passenger.checkedIn
          }">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

      <h3>Airline Passengers</h3>
      <ul *ngIf="passengers.length > 0">
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

      <h3>Airline Passengers</h3>
      <ul *ngIf="passengers.length > 0">
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngStyle]="{
            backgroundColor: (passenger.checkedIn ? '#2ecc71' : '#c0392b')
          }">
          </span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

    </div>
    `
  // templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = '';
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
    },
    {
      id: 4,
      fullname: 'Mao',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Jessica', age: 1 }]
    },
    {
      id: 5,
      fullname: 'Vic',
      checkedIn: false,
      checkInDate: null,
      children: null
    }
  ];

  // passengers: Passenger[] = [];

}
