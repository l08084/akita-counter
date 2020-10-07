import { Component, OnInit } from '@angular/core';
import { CounterService } from './state/counter.service';
import { CounterQuery } from './state/counter.query';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  readonly counter$: Observable<number>;

  constructor(
    private counterService: CounterService,
    private counterQuery: CounterQuery,
    private router: Router
  ) {
    this.counter$ = this.counterQuery.select('counter');
  }

  ngOnInit() {}

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  goToTodo() {
    this.router.navigate(['/todo']);
  }
}
