import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { TodoStore } from './todo.store';
@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private store: TodoStore) {}

  /**
   * TODOを追加する
   *
   * @param {string} title
   * @memberof TodoService
   */
  addTodo(title: string) {
    this.store.add({
      id: guid(),
      title,
    });
  }

  /**
   * TODOを削除する
   *
   * @param {ID} id
   * @memberof TodoService
   */
  removeTodo(id: ID) {
    this.store.remove(id);
  }
}
