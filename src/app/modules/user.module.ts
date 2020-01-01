import { NgModule } from "@angular/core";
import { LoginComponent } from '../user/login/login.component';
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';

@NgModule({
    declarations:[
        LoginComponent,
        DashboardComponent,
        ProfileComponent
    ],
    imports: []
})

export class userModule { }