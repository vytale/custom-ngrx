import { EntityState } from '@ngrx/entity';

export interface BaseState<Entity> extends EntityState<Entity> {
    loaded: boolean;
    loading: boolean;
};