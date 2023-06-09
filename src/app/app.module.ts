import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/services/http/http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/services/interceptor/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [HttpService, {
    multi: true,
    useClass: TokenInterceptor,
    provide: HTTP_INTERCEPTORS
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
