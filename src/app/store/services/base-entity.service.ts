import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



export class BaseEntityService<Entity> {

  constructor(private HttpClient : HttpClient, entityUrl : string) {
    this.entityUrl = entityUrl;
  }

  entityUrl : string;

  public create(entity : Entity)
  {
    return this.HttpClient.post<Entity>(`${environment.apiUrl}/${this.entityUrl}`, entity)
  }

  public search(searchCriterias : any) : Observable<Entity[]>
  {
    return this.HttpClient.post<Entity[]>(`${environment.apiUrl}/${this.entityUrl}`, searchCriterias)
  }

  public readAll() : Observable<Entity[]>
  {
    return this.HttpClient.get<Entity[]>(`${environment.apiUrl}/${this.entityUrl}`)
  }

  public read(id : string) : Observable<Entity>
  {
    return this.HttpClient.get<Entity>(`${environment.apiUrl}/${this.entityUrl}/${id}`)
  }

  public update(id : string, entity : Partial<Entity>) : Observable<Entity>
  {
    return this.HttpClient.patch<Entity>(`${environment.apiUrl}/${this.entityUrl}/${id}`, entity)
  }

  public delete(id : string) : Observable<Object>
  {
    return this.HttpClient.delete(`${environment.apiUrl}/${this.entityUrl}/${id}`);
  }
}
