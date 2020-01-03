import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginGuard } from "../user/login.guard";


const routes: Routes = [
  {path: '',  pathMatch: 'full', component: DashboardComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileComponent,canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
