import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '../header/header.component';
import { ClassesComponent } from '../classes/classes.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AppRoutingModule } from '../routes/app-routing.module';

@NgModule({
    declarations:[
        DashboardComponent,
        ProfileComponent,
        LoginComponent,
        HeaderComponent,
        ClassesComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AppRoutingModule,
    ],
    exports: [LoginComponent],
})

export class userModule { }