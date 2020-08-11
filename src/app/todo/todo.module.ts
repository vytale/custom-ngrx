import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoPropertiesComponent } from './todo-properties/todo-properties.component';



@NgModule({
  declarations: [TodoListComponent, TodoComponent, TodoPropertiesComponent],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
