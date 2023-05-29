import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserService } from './user.service';
import { userAdapter } from './user-adapter/user.adapter';


@NgModule({
  declarations: [
    UserComponent,
    UserListContainerComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    userAdapter
  ]
})
export class UserModule { }
