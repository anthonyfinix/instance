// core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// additional imports
import { GlobalErrorHandler } from './core/services/global-error-handler.service';
// custom modules
import { userModule } from './modules/user.module';
import { SharedModule } from './modules/shared.module';
// core custom components
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { OverviewComponent } from './core/components/overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    OverviewComponent,
  ],
  imports: [
    userModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent],
})
export class AppModule { }
