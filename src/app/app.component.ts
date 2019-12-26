import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { MainHeaderService } from './components/header/header.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarMode: boolean;
  constructor(
    public auth: AuthenticationService,
    public headerService: MainHeaderService,
    private bpObs: BreakpointObserver,
  ){
    bpObs.observe([Breakpoints.Handset]).subscribe(result=>this.sideBarMode = result.matches);
    this.headerService.sidebarToggle()
  }


  
  
}
