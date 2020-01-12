import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { HeaderService } from './header.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Output() public sideNavToggle: EventEmitter<any> = new EventEmitter();

    constructor(
        private authService: AuthenticationService,
        public headerService: HeaderService
    ) { }

    public toggleSideNavbar = () => {
        console.log('test');
        this.sideNavToggle.emit(null);
    }
    ngOnInit() {
        
    }
}