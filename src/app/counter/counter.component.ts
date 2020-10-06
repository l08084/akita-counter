import { Component, OnInit } from '@angular/core';
import { CounterService } from './state/counter.service';
import { CounterQuery } from './state/counter.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  readonly count$: Observable<number>;

  constructor(
    private counterService: CounterService,
    private counterQuery: CounterQuery
  ) {
    this.count$ = this.counterQuery.select('count');
  }

  ngOnInit() {}
}
