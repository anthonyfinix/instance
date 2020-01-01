import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { LoginComponent } from '../user/login/login.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginGuard } from "../user/login.guard";
import { LogoutGuard } from "../user/logout.guard";


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  {path: 'profile', component: ProfileComponent,canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
