import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |  boolean {

    return this.authservice.isAuthenticated().then( authenticated => {
      if (authenticated) {
        return true;
      } else {
        console.log("access denied");
        this.router.navigate(['/home']);
        return false;
      }
    });

  }

}