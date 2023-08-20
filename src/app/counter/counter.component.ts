import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent implements OnInit {

    counter = 10;

    constructor() { }

    ngOnInit() { }


    increaseBy(value: number):void {
        this.counter += value;
    }

    resetCounter() {
        this.counter = 10;
    }

}