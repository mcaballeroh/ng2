import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
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
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Mao',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Vic',
      checkedIn: false
    }
  ];

  // passengers: Passenger[] = [];

}
