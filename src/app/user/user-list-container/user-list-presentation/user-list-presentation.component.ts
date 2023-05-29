import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html'
})
export class UserListPresentationComponent implements OnInit {

  private getAllUser: User[];

  constructor(
    private route: Router
  ) {
    this.getAllUser = [];
  }

  ngOnInit(): void {
  }

}
