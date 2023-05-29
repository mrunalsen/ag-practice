import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public user$: Subject<boolean>;
  constructor() {
    this.user$ = new Subject();
  }
}
