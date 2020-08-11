import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { UserAction } from 'src/app/store/actions';
import { UserSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$ : Observable<User[]>

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(UserSelector.selectAll)
    this.store.dispatch(new UserAction.ReadAll())
  }

}
