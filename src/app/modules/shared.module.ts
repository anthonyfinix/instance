import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModules } from './angular-fire.module';
import { MaterialModule } from './material.module'
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from '../routes/app-routing.module';



@NgModule({
  exports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModules,
    MaterialModule,
    LayoutModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
