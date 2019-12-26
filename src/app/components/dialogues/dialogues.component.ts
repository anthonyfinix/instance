import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InstanceComponent } from '../instance/instance.component';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
  })
  export class Dialog {
  
    constructor(
      public dialogRef: MatDialogRef<InstanceComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }
    onNoClick(): void {
      this.dialogRef.close('cancelled');
    }
  }