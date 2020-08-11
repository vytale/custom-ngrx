import { Action } from '@ngrx/store';
import { Todo } from 'src/app/models';
import { ActionConstants } from './actionConstants'

const namespace = Todo.name;

export const CREATE = `[${namespace}] ${ActionConstants.CREATE}`
export const CREATE_SUCCESS = `[${namespace}] ${ActionConstants.CREATE_SUCCESS}`
export const CREATE_FAIL = `[${namespace}] ${ActionConstants.CREATE_FAIL}`

export const SEARCH = `[${namespace}] ${ActionConstants.SEARCH}`
export const SEARCH_SUCCESS = `[${namespace}] ${ActionConstants.SEARCH_SUCCESS}`
export const SEARCH_FAIL = `[${namespace}] ${ActionConstants.SEARCH_FAIL}`

export const READALL = `[${namespace}] ${ActionConstants.READALL}`
export const READALL_SUCCESS = `[${namespace}] ${ActionConstants.READALL_SUCCESS}`
export const READALL_FAIL = `[${namespace}] ${ActionConstants.READALL_FAIL}`

export const READ = `[${namespace}] ${ActionConstants.READ}`
export const READ_SUCCESS = `[${namespace}] ${ActionConstants.READ_SUCCESS}`
export const READ_FAIL = `[${namespace}] ${ActionConstants.READ_FAIL}`

export const UPDATE = `[${namespace}] ${ActionConstants.UPDATE}`
export const UPDATE_SUCCESS = `[${namespace}] ${ActionConstants.UPDATE_SUCCESS}`
export const UPDATE_FAIL = `[${namespace}] ${ActionConstants.UPDATE_FAIL}`

export const DELETE = `[${namespace}] ${ActionConstants.DELETE}`
export const DELETE_SUCCESS = `[${namespace}] ${ActionConstants.DELETE_SUCCESS}`
export const DELETE_FAIL = `[${namespace}] ${ActionConstants.DELETE_FAIL}`

export class Create implements Action {
    readonly type = CREATE;
    constructor(public entity: Todo) {}
}

export class Create_Success implements Action {
    readonly type = CREATE_SUCCESS;
    constructor(public entity: Todo) {}
}

export class Create_Fail implements Action {
    readonly type = CREATE_FAIL;
    constructor(public error: any) {}
}

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public searchCriterias: any) {}
}

export class Search_Success implements Action {
    readonly type = SEARCH_SUCCESS;
    constructor(public entities: Todo[]) {}
}

export class Search_Fail implements Action {
    readonly type = SEARCH_FAIL;
    constructor(public error: any) {}
}

export class ReadAll implements Action {
    readonly type = READALL;
    constructor() {}
}

export class ReadAll_Success implements Action {
    readonly type = READALL_SUCCESS;
    constructor(public entities: Todo[]) {}
}

export class ReadAll_Fail implements Action {
    readonly type = READALL_FAIL;
    constructor(public error: any) {}
}

export class Read implements Action {
    readonly type = READ;
    constructor(public id: string) {}
}

export class Read_Success implements Action {
    readonly type = READ_SUCCESS;
    constructor(public entity: Todo) {}
}

export class Read_Fail implements Action {
    readonly type = READ_FAIL;
    constructor(public error: any) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public id: string, public entity: Partial<Todo>) {}
}

export class Update_Success implements Action {
    readonly type = UPDATE_SUCCESS;
    constructor(public id: string, public entity: Partial<Todo>) {}
}

export class Update_Fail implements Action {
    readonly type = UPDATE_FAIL;
    constructor(public error: any) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) {}
}

export class Delete_Success implements Action {
    readonly type = DELETE_SUCCESS;
    constructor(public id: string) {}
}

export class Delete_Fail implements Action {
    readonly type = DELETE_FAIL;
    constructor(public error: any) {}
}

export type TodoActions = 
Create | Create_Success | Create_Fail |
Read | Read_Success | Read_Fail |
ReadAll | ReadAll_Success | ReadAll_Fail |
Update | Update_Success | Update_Fail |
Delete | Delete_Success | Delete_Fail ;