import { Query } from '@datorama/akita';
import { CounterState, CounterStore } from './counter.store';

export class CounterQuery extends Query<CounterState> {
  constructor(protected store: CounterStore) {
    super(store);
  }
}
