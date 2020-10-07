import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
