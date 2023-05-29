import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  public onLogout() {
    this.route.navigateByUrl('/login');
    localStorage.clear();
  }
}
