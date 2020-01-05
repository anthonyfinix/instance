import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })


export class UserService {

    user$: Observable<User | null>;
    
    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
        ) {
            this.user$ = this.afAuth.authState.pipe(
                switchMap(user => {
                    if (user) {
                    return afs.doc<User>(`/users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        )
    }

    login(email,password) {
            return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        
    }
    logout() {
        this.afAuth.auth.signOut().then(()=>{
            this.router.navigate(['/login'])
        });
    }


}