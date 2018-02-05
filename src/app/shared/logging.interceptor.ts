import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';

// import * as fromAuth from '../auth/store/auth.reducer';
// import { AppState } from '../store/app.reducers';
// import { Store } from '@ngrx/store';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  // constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle(req).do( event => {
      console.log('Logging interceptor: ', event);
    });
  }
}
