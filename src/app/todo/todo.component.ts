import { TodoState } from './state/todo.store';
import { Component, OnInit } from '@angular/core';
import { getEntityType } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TodoService } from './state/todo.service';
import { TodoQuery } from './state/todo.query';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  readonly allTodo$: Observable<getEntityType<TodoState>[]>;
  todoFormGroup: FormGroup;
  titleControl: FormControl;

  constructor(
    private service: TodoService,
    private query: TodoQuery,
    private fb: FormBuilder
  ) {
    this.allTodo$ = this.query.selectAll();
    this.todoFormGroup = this.fb.group({
      title: ['', []],
    });
  }

  ngOnInit() {}
}
