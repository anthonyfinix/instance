import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClassViewComponent } from '../view/class-view.component';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-create-dialog',
    templateUrl: 'create.dialog.html',
    styleUrls: ['create.dialog.css']
})

export class CreateInstanceDialog {

    createForm: FormGroup;
    controlName: string[] = [];
    constructor(
        public dialogRef: MatDialogRef<ClassViewComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
    ) {
        let formcontrols: any = {};
        Object.entries(data).map((value, i) => {
            this.controlName.push(value[0])
            formcontrols[value[0]] = new FormControl('', Validators.required);
        })
        this.createForm = new FormGroup(formcontrols)
        // console.log(this.createForm)
        // console.log(Object.entries(data))
        // this.createForm = fb.group({})
    }

    cancel(): void {
        this.dialogRef.close();
    }

}