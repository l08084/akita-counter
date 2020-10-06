import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CounterState, CounterStore } from './counter.store';
@Injectable({ providedIn: 'root' })
export class CounterQuery extends Query<CounterState> {
  constructor(protected store: CounterStore) {
    super(store);
  }
}
