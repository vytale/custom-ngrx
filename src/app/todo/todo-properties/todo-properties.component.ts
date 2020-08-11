import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Todo } from 'src/app/models';
import { map, filter, find, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { TodoSelector } from 'src/app/store/selectors';
import { TodoAction } from 'src/app/store/actions';

@Component({
  selector: 'app-todo-properties',
  templateUrl: './todo-properties.component.html',
  styleUrls: ['./todo-properties.component.scss']
})
export class TodoPropertiesComponent implements OnInit {

  todo$ : Observable<Todo>;
  entityID$: Observable<string>;
  user$: Observable<Todo>;

  reloadEntityIDOnChange: Subscription;

  constructor(private route: ActivatedRoute, private store : Store) { }

  ngOnInit(): void {
    this.entityID$ = this.route.params.pipe(
      map(params => {
        const id = params['id'];
        this.store.dispatch(new TodoAction.Read(id));
        return id;
      })
    )
    this.todo$ = this.entityID$.pipe(
      switchMap(id => this.store.select(TodoSelector.selectEntity, id))
    )
  }

}
