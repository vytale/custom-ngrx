import { createEntityAdapter } from '@ngrx/entity';
import { Todo, User } from 'src/app/models';

export const TodoAdapter = createEntityAdapter<Todo>();
export const UserAdapter = createEntityAdapter<User>();