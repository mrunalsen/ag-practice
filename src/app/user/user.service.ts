import { Injectable } from '@angular/core';
import { HttpService } from '../core/services/http/http.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { User, UserResponse } from './model/user.model';
import { userAdapter } from './user-adapter/user.adapter';

@Injectable()
export class UserService {
  public api: string;
  constructor(
    private http: HttpService,
    private allUsersAdapter: userAdapter
  ) {
    this.api = environment.apiURL;
  }
  public getAllUserData(): Observable<User[]> {
    const url: string = this.api + 'user/';
    return this.http.httpGetRequest(url).pipe(map((res: any) => {
      res.data.data = res.data.data.map((res: UserResponse) => this.allUsersAdapter.toResponse(res));
      return res.data.data;
    }));
  }
}