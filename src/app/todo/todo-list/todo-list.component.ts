import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TodoSelector } from './../../store/selectors';
import { TodoAction } from './../../store/actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.todos$ = this.store.select(TodoSelector.selectAll)
    this.store.dispatch(new TodoAction.ReadAll())
  }

  deleteTodo(todo: Todo)
  {
    this.store.dispatch(new TodoAction.Delete(todo.id))
  }

  updateTodo(todo: Todo)
  {
    const newTodo: Todo = {...todo, completed: !todo.completed}
    this.store.dispatch(new TodoAction.Update(todo.id, newTodo))
  }

  createTodo()
  {
    const newTodo: Todo = { title: "some task", userId: 1, completed: false, id: '-1'}
    this.store.dispatch(new TodoAction.Create(newTodo))
  }

}
