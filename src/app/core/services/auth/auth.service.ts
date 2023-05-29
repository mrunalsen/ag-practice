import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  public userToken: any;
  public api: string;

  constructor(
    private http: HttpService,
    // private adapter: us
  ) {
    this.api = environment.apiURL;
  }
  public login(credentials: any): Observable<any> {
    const url: string = this.api + 'user/log-in';
    return this.http.httpPostRequest(url, credentials).pipe(map((res) => {
      localStorage.setItem('token', res.token);
    }));
  }

  public getToken() {
    this.userToken = localStorage.getItem('token') ?? '';
    return this.userToken;
  }
}
