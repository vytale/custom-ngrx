import { UserAction as actions } from './../actions';
import { UserAdapter as adapter } from './../adapters';
import { UserState as State, UserInitialState as initialState } from './../states';

export function reducer(
    state: State = initialState,
    action: actions.UserActions) {
    switch(action.type) {
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