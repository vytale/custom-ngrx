import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserAdapter as adapter } from './../adapters';
import { UserState as State } from './../states';
import { User } from 'src/app/models';

const getState = createFeatureSelector<State>(User.name);

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