import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
  })

  export class NoAuthGuard implements CanActivate, CanActivateChild{ 
    constructor(private auth: AuthService, private router: Router) {}
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if(this.auth.isAuthenticated()){
      
        return of(false)

    }else {
        // this.router.navigate(['/myPage'])
        return of(true)
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route,state)
  }
}
