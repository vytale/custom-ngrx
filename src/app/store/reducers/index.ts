import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo.reducer';
import * as fromUser from './user.reducer';

export const reducers: ActionReducerMap<any> = {
   Todo : fromTodo.reducer,
   User : fromUser.reducer
}