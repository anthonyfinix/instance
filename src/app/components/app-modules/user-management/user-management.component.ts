import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserManagementService } from './user-management.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { GlobalErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {

  users: Observable<any>;
  userForm = this.fb.group({
    email: [''],
    password: [''],
    displayName: [''],
    photoURL: ['']
  })

  constructor(
    private userManageService: UserManagementService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private globalErrorService: GlobalErrorHandlerService
  ) {
    this.users = userManageService.getAllUser();
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        email: this.userForm.get('email').value,
        displayName: this.userForm.get('displayName').value,
        password: this.userForm.get('password').value,
      }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        // console.log(result)
        this.userManageService.createUser(result.email, result.displayName, result.password)
      },
      error => this.globalErrorService.handleError(error)
    );
  }

  onDelete(uid) {
    // console.log(uid)
    this.userManageService.deleteUser(uid);
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<UserManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
