import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

const routes: Routes = [
  {
    path: '', component: UserListContainerComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListPresentationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
