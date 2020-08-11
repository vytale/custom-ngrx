import { TodoAction as actions } from './../actions';
import { TodoAdapter as adapter } from './../adapters';
import { TodoState as State, TodoInitialState as initialState } from './../states';

export function reducer(
    state: State = initialState,
    action: actions.TodoActions) {
    switch(action.type) {
        case actions.READALL: {
            const newState : State = { ...state, loaded : false, loading: true}
            return newState;
        }
        case actions.CREATE_SUCCESS: {
            const _action = action as actions.Create_Success
            return adapter.addOne(_action.entity, state);
        }
        case actions.SEARCH_SUCCESS: {
            const _action = action as actions.Search_Success
            return adapter.upsertMany(_action.entities, state);
        }
        case actions.READALL_SUCCESS: {
            const _action = action as actions.ReadAll_Success
            return adapter.setAll(_action.entities, state);
        }
        case actions.READ_SUCCESS: {
            const _action = action as actions.Read_Success
            return adapter.setOne(_action.entity, state);
        }
        case actions.UPDATE_SUCCESS: {
            const _action = action as actions.Update_Success
            return adapter.updateOne({
                id: _action.id,
                changes: _action.entity,
            }, state);
        }
        case actions.DELETE_SUCCESS: {
            const _action = action as actions.Delete_Success
            return adapter.removeOne(_action.id, state);
        }
        default:
            return state;
    }
} 