import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { TodoStore } from './todo.store';
@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private store: TodoStore) {}

  addTodo(title: string) {
    this.store.add({
      id: guid(),
      title,
    });
  }

  removeTodo(id: ID) {
    this.store.remove(id);
  }
}
