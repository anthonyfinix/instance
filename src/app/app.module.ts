import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModules } from './modules/angular-fire.module';
import { MaterialModule } from './modules/material.module'
import { userModule } from './modules/user.module';
import { AppComponent } from './app.component';
// import { GlobalErrorHandler } from './core/services/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    userModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModules,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
