import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MasterComponent } from './components/master/master.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MasterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
