import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule, MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
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
  MatListModule
]

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule { }
