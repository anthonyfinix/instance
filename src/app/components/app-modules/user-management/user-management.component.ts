import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  createUserForm: FormGroup;
  users: Observable<any>;
  constructor(
    private userManage: UserManagementService,
  ) {
    this.createUserForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
    this.users = userManage.getAllUser();
  }

  ngOnInit() {
  }

  onCreateUserSubmit(){
    this.userManage.createUser(this.createUserForm.get('email').value,this.createUserForm.get('password').value)
  }
  onDelete(uid){
    // console.log(uid)
    this.userManage.deleteUser(uid);

  }

}
