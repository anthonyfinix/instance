import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<User>;
  progressBar = new Subject();

  constructor(

    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private GlobalErrorHandler: GlobalErrorHandlerService

  ) {
    this.user$ = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          this.router.navigate(['/login']);
          return of(null);
        }
      })
    )
  }
  // login user and create doc
  login(username, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then((user) => {
        console.log(user)
      })
      .then(() => { this.router.navigate(['/']) })
      .catch(error => {
        this.GlobalErrorHandler.handleError(error)
      })
      .finally(() => {
        this.progressBar.next(false)
      })
  }

  // obselect or later usable
  // createUser(username, password){
  //   return this.afAuth.auth.createUserWithEmailAndPassword(username, password)
  //   .then(res=>{ return this.setUserDoc(res.user)})
  //   .then((user)=>console.log(user))
  //   .catch(error=>console.log('user creation error :'+error))
  // }
  // logout
  
  logout() {
    this.afAuth.auth.signOut();
  }

  // Update properties on the user document
  updateUser(user: User, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data)
  }

}
