import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HeaderService } from 'src/app/core/components/header/header.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent {

    constructor(
        private authService: AuthenticationService,
        public headerService: HeaderService
    ) { }

}