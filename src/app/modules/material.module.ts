import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatDialogModule
} from '@angular/material'

const MaterialModules = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatDialogModule
]

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule { }
