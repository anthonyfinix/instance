import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private afs: AngularFirestore,
    private aff: AngularFireFunctions,
    private auth: AuthenticationService
  ) { }

  createUser(email, password) {
    const CreateUser = this.aff.httpsCallable('createUser');
    const data$ = CreateUser({ email: email, password: password });
    data$.subscribe((data) => {
      const user = {
        uid: data.uid,
        email: data.email,
      }
      this.auth.setUserDoc(user);
      // console.log(data)
    },
    error => console.log(error),
    () => { console.log('completed') });
  }

  getAllUser() {
    return this.afs.collection('/users').valueChanges();
  }

  deleteUser(uid) {
    const delUser = this.aff.httpsCallable('deleteUser');
    delUser({uid: uid});
    this.afs.doc(`users/${uid}`).delete();
  }
}
