import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserAction } from '../actions';
import { UserService } from './../services';


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private _UserService : UserService) {}

    @Effect()
    create$ = this.actions$.pipe(
        ofType(UserAction.CREATE),
        switchMap(action => {
            const _action = action as UserAction.Create;
            return this._UserService.create(_action.entity).pipe(
                map(entity => new UserAction.Create_Success(entity)),
                catchError(error => of ( new UserAction.Create_Fail(error)))
            )
        })
    )

    @Effect()
    search$ = this.actions$.pipe(
        ofType(UserAction.SEARCH),
        switchMap(action => {
            const _action = action as UserAction.Search
            return this._UserService.search(_action.searchCriterias).pipe(
                map(entities => new UserAction.Search_Success(entities)),
                catchError(error => of( new UserAction.Search_Fail(error)))
            )
        })
    )

    @Effect()
    readAll$ = this.actions$.pipe(
        ofType(UserAction.READALL),
        switchMap(() => {
            return this._UserService.readAll().pipe(
                map(entities => new UserAction.ReadAll_Success(entities)),
                catchError(error => of( new UserAction.ReadAll_Fail(error)))
            )
        })
    )

    @Effect()
    read$ = this.actions$.pipe(
        ofType(UserAction.READ),
        switchMap(action => {
            const _action = action as UserAction.Read;
            return this._UserService.read(_action.id).pipe(
                map(entity => new UserAction.Read_Success(entity)),
                catchError(error => of( new UserAction.Read_Fail(error)))
            )
        })
    )

    @Effect()
    update$ = this.actions$.pipe(
        ofType(UserAction.UPDATE),
        switchMap(action => {
            const _action = action as UserAction.Update;
            return this._UserService.update(_action.id, _action.entity).pipe(
                map(entity => new UserAction.Update_Success(_action.id, entity)),
                catchError(error => of ( new UserAction.Update_Fail(error)))
            )
        })
    )

    @Effect()
    delete$ = this.actions$.pipe(
        ofType(UserAction.DELETE),
        switchMap(action => {
            const _action = action as UserAction.Delete;
            return this._UserService.delete(_action.id).pipe(
                map(entity => new UserAction.Delete_Success(_action.id)),
                catchError(error => of ( new UserAction.Delete_Fail(error)))
            )
        })
    )
}