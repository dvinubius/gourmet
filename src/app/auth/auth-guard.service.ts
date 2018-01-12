import { CanActivate } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    const ok = this.authService.isAuthenticated();
    if (!ok) {
      this.router.navigate(['signin'],
                          {
                            queryParams: { entryPoint: state.url.split('#')[0] },
                            fragment: state.url.split('#')[1]
                          });
    }
    return ok;
  }
}
