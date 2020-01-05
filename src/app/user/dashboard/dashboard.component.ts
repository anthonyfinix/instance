import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { HeaderService } from 'src/app/header/header.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent{

    constructor(
        private userService: UserService,
    public headerService: HeaderService
    ){}

}