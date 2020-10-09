import { ID } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
}

export function createTodo(params: Partial<Todo>) {
  return {} as Todo;
}
