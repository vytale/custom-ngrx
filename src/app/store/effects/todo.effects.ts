import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { TodoAction } from '../actions';
import { TodoService } from './../services';


@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private _TodoService : TodoService) {}

    @Effect()
    create$ = this.actions$.pipe(
        ofType(TodoAction.CREATE),
        switchMap(action => {
            const _action = action as TodoAction.Create;
            return this._TodoService.create(_action.entity).pipe(
                map(entity => new TodoAction.Create_Success(entity)),
                catchError(error => of ( new TodoAction.Create_Fail(error)))
            )
        })
    )

    @Effect()
    search$ = this.actions$.pipe(
        ofType(TodoAction.SEARCH),
        switchMap(action => {
            const _action = action as TodoAction.Search
            return this._TodoService.search(_action.searchCriterias).pipe(
                map(entities => new TodoAction.Search_Success(entities)),
                catchError(error => of( new TodoAction.Search_Fail(error)))
            )
        })
    )

    @Effect()
    readAll$ = this.actions$.pipe(
        ofType(TodoAction.READALL),
        switchMap(() => {
            return this._TodoService.readAll().pipe(
                map(entities => new TodoAction.ReadAll_Success(entities)),
                catchError(error => of( new TodoAction.ReadAll_Fail(error)))
            )
        })
    )

    @Effect()
    read$ = this.actions$.pipe(
        ofType(TodoAction.READ),
        switchMap(action => {
            const _action = action as TodoAction.Read;
            return this._TodoService.read(_action.id).pipe(
                map(entity => new TodoAction.Read_Success(entity)),
                catchError(error => of( new TodoAction.Read_Fail(error)))
            )
        })
    )

    @Effect()
    update$ = this.actions$.pipe(
        ofType(TodoAction.UPDATE),
        switchMap(action => {
            const _action = action as TodoAction.Update;
            return this._TodoService.update(_action.id, _action.entity).pipe(
                map(entity => new TodoAction.Update_Success(_action.id, entity)),
                catchError(error => of ( new TodoAction.Update_Fail(error)))
            )
        })
    )

    @Effect()
    delete$ = this.actions$.pipe(
        ofType(TodoAction.DELETE),
        switchMap(action => {
            const _action = action as TodoAction.Delete;
            return this._TodoService.delete(_action.id).pipe(
                map(entity => new TodoAction.Delete_Success(_action.id)),
                catchError(error => of ( new TodoAction.Delete_Fail(error)))
            )
        })
    )
}