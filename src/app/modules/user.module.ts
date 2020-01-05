import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '../core/components/header/header.component';
import { ClassesComponent } from '../classes/classes.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { AppRoutingModule } from '../routes/app-routing.module';
import { OverviewComponent } from '../core/components/overview/overview.component';

@NgModule({
    declarations:[
        DashboardComponent,
        ProfileComponent,
        LoginComponent,
        HeaderComponent,
        ClassesComponent,
        SidebarComponent,
        OverviewComponent
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