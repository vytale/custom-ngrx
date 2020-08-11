import { Injectable } from '@angular/core';
import { BaseEntityService } from 'src/app/store/services/base-entity.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseEntityService<User> {
  constructor(httpClient : HttpClient) {
    super(httpClient, "users");
  }
}
