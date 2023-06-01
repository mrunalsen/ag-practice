import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 768 ? this.isMobile = true : this.isMobile = false;
  }

  public isMobile: boolean;
  public innerWidth: any;
  public translate: boolean;
  public translate1: boolean;
  public loginForm: FormGroup;
  private destroy: Subject<void>;
  constructor(
    private authService: AuthService,
    private commonservice: CommonService,
    private route: Router,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: []
    });
    this.destroy = new Subject();
    this.translate = true;
    this.translate1 = false;
    this.isMobile = true;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).pipe(takeUntil(this.destroy)).subscribe((data) => {
        this.commonservice.user$.next(data);
        this.route.navigateByUrl('/user/list');
      });
    }
  }

  public get getControls() {
    return this.loginForm.controls;
  }
  public onTranslate() {
    this.translate = !this.translate;
    this.translate1 = !this.translate1;
  }
}
