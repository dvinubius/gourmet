import { CanActivate } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
            private store: Store<AppState>) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    const ok = this.store.select('auth')
      .take(1)
      .map((authState: fromAuth.State) => {
        if (!authState.authenticated) {
          this.router.navigate(['signin'],
                              {
                                queryParams: { entryPoint: state.url.split('#')[0] },
                                fragment: state.url.split('#')[1]
                              });
        }

        return authState.authenticated;
      });

    return ok;
  }
}
