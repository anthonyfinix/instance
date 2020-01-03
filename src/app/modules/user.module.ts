import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations:[
        DashboardComponent,
        ProfileComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    exports: [LoginComponent],
})

export class userModule { }