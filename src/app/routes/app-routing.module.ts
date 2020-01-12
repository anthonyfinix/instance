import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { LoginGuard } from "../user/login.guard";
import { LoginComponent } from '../user/login/login.component';
import { ClassViewComponent } from '../class/view/class-view.component';
import { OverviewComponent } from '../core/components/overview/overview.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent, canActivate: [LoginGuard], },
      { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard], },
      { path: 'class/:class', component: ClassViewComponent, canActivate: [LoginGuard], }
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
