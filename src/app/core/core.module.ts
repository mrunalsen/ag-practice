import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MasterComponent } from './components/master/master.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MasterComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MasterComponent,
    LoaderComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoaderService
  ]
})
export class CoreModule { }
