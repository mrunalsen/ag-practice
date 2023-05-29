import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';
import { LoginComponent } from './core/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: MasterComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      {
        path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
