import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoAdapter as adapter } from './../adapters';
import { TodoState as State } from './../states';
import { Todo } from 'src/app/models';

const getState = createFeatureSelector<State>(Todo.name);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors(getState);

export const selectEntity = createSelector(
    selectAll,
    ((all, id) => all.find(entity => entity.id == id))
)