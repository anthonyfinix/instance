import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from 'src/app/models/user.model';
import { GlobalErrorHandlerService } from 'src/app/services/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private afs: AngularFirestore,
    private aff: AngularFireFunctions,
    private globalErrorService: GlobalErrorHandlerService
  ) { }

  createUser(email, displayName, password) {
    const CreateUser = this.aff.httpsCallable('createUser');
    const data$ = CreateUser({ email: email, displayName: displayName, password: password }).subscribe(
      data=> this.setUserDoc(data),
      error =>this.globalErrorService.handleError(error),
      ()=>this.globalErrorService.handleError('completed')
    );
  }

  // set user data
  setUserDoc(user) {
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      photoURL: 'https://goo.gl/Fz9nrQ',
      displayName: user.displayName,
    }
    // console.log(data);
    this.afs.doc<User>(`users/${user.uid}`).set(data);
  }

  getAllUser() {
    return this.afs.collection('/users').valueChanges();
  }

  deleteUser(uid) {
    const delUser = this.aff.httpsCallable('deleteUser');
    delUser({ uid: uid });
    this.afs.doc(`users/${uid}`).delete();
  }
}
