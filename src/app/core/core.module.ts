import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MasterComponent } from './components/master/master.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MasterComponent
  ]
})
export class CoreModule { }
