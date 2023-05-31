import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private route: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  public onLogout() {
    this.route.navigateByUrl('/login');
    localStorage.clear();
    this.toastr.info('Logged Out');
  }
}
