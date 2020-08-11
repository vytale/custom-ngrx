import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPropertiesComponent } from './todo-properties/todo-properties.component';


const routes: Routes = [
  { path: '',
    component: TodoComponent,
    children : 
    [
      {
        path: 'list',
        component: TodoListComponent
      },
      {
        path: 'properties/:id',
        component: TodoPropertiesComponent
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
