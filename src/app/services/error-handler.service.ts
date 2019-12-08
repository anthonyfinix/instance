import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable({
    providedIn: 'root'
})

export class GlobalErrorHandlerService implements ErrorHandler {
    
    constructor(
        private injector: Injector,
        public snackBar: MatSnackBar
    ) { }

    handleError(error) {
        console.error('An error occurred:', error.message);
        let snackBarRef = this.snackBar.open(error,'close',{duration: 3000} );
    }

}