import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';
@Injectable({ providedIn: 'root' })
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.update((state) => ({
      counter: state.counter + 1,
    }));
  }

  decrement() {
    this.counterStore.update((state) => ({
      counter: state.counter - 1,
    }));
  }
}
