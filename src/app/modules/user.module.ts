import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginComponent } from '../user/login/login.component';
import { ClassViewComponent } from '../class/view/class-view.component';
import { SharedModule } from './shared.module';
import { CreateInstanceDialog } from '../class/dialoges/create.dialog';

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent,
        ClassViewComponent,
        CreateInstanceDialog
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    entryComponents: [CreateInstanceDialog],
    exports: [LoginComponent],
})

export class userModule { }