import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Hola mundo';
  counter = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

}
