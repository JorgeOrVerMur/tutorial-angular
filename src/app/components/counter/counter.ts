import { Component, signal } from '@angular/core';

@Component({
  // template: `
  //       <h1>Contador {{counter}} </h1>
  //       <p>Contador:</p>
  //       <button (click)="increaseBy(1)">Incrementar +1</button>
  //       <button (click)="increaseBy(-1)">Decrementar -1</button>
  //       <button (click)="resetCounter()">Reset 10</button>
  //   `,
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {

  public counter = 10;
  public title = 'Counter Title';

  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;

    this.counterSignal.update(curr => curr + value);

  }

  resetCounter() {
    this.counter = 10;

    this.counterSignal.set(10);
  }

}
