import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user$: Observable<User>;

  constructor(

    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,

  ) {
    this.user$ = afAuth.authState.pipe(
      switchMap(user=>{
        if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }else{
          this.router.navigate(['/login']);
          return of(null);
        }
      })
    )
  }
  // login user and create doc
  login(username, password){
    return this.afAuth.auth.signInWithEmailAndPassword(username,password)
    .then((user)=>console.log(user))
    .then(()=>{this.router.navigate(['/'])})
    .catch(error=> console.log('login error :'+error))
  }
  createUser(username, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(username, password)
    .then(res=>{ return this.setUserDoc(res.user)})
    .then((user)=>console.log(user))
    .then(()=>{this.router.navigate(['/'])})
    .catch(error=>console.log('user creation error :'+error))
  }
  // logout
  logout(){
    this.afAuth.auth.signOut();
  }

  // set user data
  setUserDoc(user){
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      photoURL: 'https://goo.gl/Fz9nrQ'
    }
    console.log(data);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${user.uid}`); 

    return userRef.set(data)
  }

  // Update properties on the user document
  updateUser(user: User, data: any) { 
    return this.afs.doc(`users/${user.uid}`).update(data)
  }

}
