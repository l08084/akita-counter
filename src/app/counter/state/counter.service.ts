import { CounterStore } from './counter.store';

export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.update((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.counterStore.update((state) => ({
      count: state.count - 1,
    }));
  }
}
