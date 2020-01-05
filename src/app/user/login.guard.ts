import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from "./services/user.service";
import { take, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    constructor(
        private auth: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.user$.pipe(
            take(1),
            map(user=>!!user),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigate(['/login']);
                }
            })
        )
    }
}


