import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModules } from './modules/angular-fire.module';
import { MaterialModule } from './modules/material.module'
import { userModule } from './modules/user.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { OverviewComponent } from './core/components/overview/overview.component';
import { GlobalErrorHandler } from './core/services/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    OverviewComponent
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
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
