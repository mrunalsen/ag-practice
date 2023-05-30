import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html'
})
export class UserListContainerComponent implements OnInit {
  public getUserList!: Observable<User[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList = this.userService.getAllUserData();
  }

}