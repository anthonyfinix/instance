import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/services/user.service';
import { HeaderService } from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor(
        private userService: UserService,
        public headerService: HeaderService
    ) { }

    ngOnInit() { }
}