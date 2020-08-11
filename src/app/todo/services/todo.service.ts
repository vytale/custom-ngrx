import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseEntityService } from '../../store/services/base-entity.service';
import { Todo } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseEntityService<Todo> {
  constructor(httpClient : HttpClient) {
    super(httpClient, "todos");
  }
}
