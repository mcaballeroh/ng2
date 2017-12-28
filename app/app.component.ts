import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo">
      <input type="text" [value]="name">
      <div>
        {{ name }}
      </div>

      <div>
        {{ numberOne + numberTwo }}
      </div>

      <div>
        {{ isHappy ? ':)' : ':(' }}
      </div>

    </div>
    `
  // templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = 'Michael';
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
