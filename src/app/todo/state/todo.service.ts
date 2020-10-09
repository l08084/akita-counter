import { TodoStore } from './todo.store';
import { Todo } from './todo.model';

export class TodoService {
  constructor(private store: TodoStore) {}

  add(todo: Todo) {
    this.store.add(todo);
  }
}
