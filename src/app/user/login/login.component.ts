import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent{
    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ){
        this.afAuth.authState.subscribe(user=>{
            if (user) {
                router.navigate(['/'])
            }
        }).unsubscribe()
    }

}