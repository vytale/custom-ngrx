import { BaseState, Todo, User } from 'src/app/models';
import { TodoAdapter, UserAdapter } from './../adapters';

const initialEntity  = { ids: [], entities: {}, loaded: false, loading: false }
// Todo
export interface TodoState extends BaseState<Todo> { };
export const TodoInitialState: TodoState = TodoAdapter.getInitialState(initialEntity);
// User
export interface UserState extends BaseState<User> { };
export const UserInitialState: UserState = UserAdapter.getInitialState(initialEntity);