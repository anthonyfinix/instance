import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { InstanceService } from './instance.service';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { User } from '../../models/user.model';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder } from '@angular/forms';
import { GlobalErrorHandlerService } from 'src/app/services/error-handler.service';
import { Dialog } from '../dialogues/dialogues.component';

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html',
    styleUrls: ['./instance.component.css']
})

export class InstanceComponent{
    users: Observable<any>;
    userForm = this.fb.group({
      email: [''],
      password: [''],
      displayName: [''],
      photoURL: ['']
    })
    displayedColumns: string[] = ['select','displayName', 'email','actions'];
    dataSource: MatTableDataSource<User> = new MatTableDataSource([]);
    selection = new SelectionModel<User>(true, []);
    @ViewChild(MatSort, { static: true }) sort: MatSort;
  
    constructor(
        private instService: InstanceService,
      public dialog: MatDialog,
      private fb: FormBuilder,
      private globalErrorService: GlobalErrorHandlerService
    ) {
      // this.dataSource = this.instService.getAllUser();
      this.instService.getAllUser().subscribe(list => {
        this.dataSource = new MatTableDataSource<User>(list)
        this.dataSource.sort = this.sort;
      })
    }
  
    ngOnInit() {
    }
  
    onDelete(uid) {
      // console.log(uid)
      this.instService.deleteUser(uid);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: User): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.uid + 1}`;
    }
    // search table
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

      
  
    openDialog(): void {
      const dialogRef = this.dialog.open(Dialog, {
        data: {
          email: this.userForm.get('email').value,
          displayName: this.userForm.get('displayName').value,
          password: this.userForm.get('password').value,
        }
      });
      dialogRef.afterClosed().subscribe(
        result => {
          if (result === 'object' && result !== null) {
            this.instService.createUser(result.email, result.displayName, result.password)
          } else {
            this.globalErrorService.handleError('user creation cancelled');
          }
        },
        error => {
          console.log(error)
          this.globalErrorService.handleError(error)
        }
      );
    }
  
}