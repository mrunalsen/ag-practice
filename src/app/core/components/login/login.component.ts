import { Component, Inject, OnInit } from '@angular/core';
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
}
