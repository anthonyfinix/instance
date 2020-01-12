import { Component, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HeaderService } from 'src/app/core/components/header/header.service';
import { LayoutService } from '../../services/layout.service';
import { tap } from 'rxjs/operators';
import { Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnDestroy {

    sidebarMode: string = 'side';
    deviceState: Subscription

    constructor(
        private authService: AuthenticationService,
        public headerService: HeaderService,
        public layout:LayoutService
    ) {
        this.deviceState = this.layout.device.subscribe(state=>{
            if (state.breakpoints[Breakpoints.XSmall]) {
                this.sidebarMode = 'over'
            } else{
                this.sidebarMode = 'side'
            }
        })
    }

    ngOnDestroy(){
        this.deviceState.unsubscribe()
    }

}