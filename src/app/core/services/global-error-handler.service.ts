import { Injectable, ErrorHandler } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})

export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        private snackBar: MatSnackBar
    ){}
    handleError(error) {
        if (error instanceof Error) {
            console.error(error)
        }else{
            this.snackBar.open(error.message, 'close',{
                duration: 2000
            });
        }
      }
}