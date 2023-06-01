import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, of } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService,
    private toastr: ToastrService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    this.loaderService.load$.next(true);
    const modifiedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(modifiedReq).pipe(finalize(() => {
      this.loaderService.load$.next(false);
    }),
      catchError((res: HttpErrorResponse) => {
        switch (res.status) {
          case 400:
            this.toastr.warning(res.error.message);
            break;
          case 401:
            this.toastr.error(res.error.message);
            break;
        }
        return of();
      }
      )
    );
  }
}
