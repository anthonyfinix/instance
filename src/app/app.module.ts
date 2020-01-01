import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModules } from './modules/angular-fire.module';
import { MaterialModule } from './modules/material.module';

import { userModule } from './modules/user.module';

import { AppComponent } from './app.component';
// import { GlobalErrorHandler } from './shared/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModules,
    userModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
