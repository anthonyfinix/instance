import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClassesComponent } from '../classes/classes.component';
import { AppRoutingModule } from '../routes/app-routing.module';

@NgModule({
    declarations:[
        ProfileComponent,
        LoginComponent,
        ClassesComponent,
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