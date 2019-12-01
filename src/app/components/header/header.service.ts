import { Injectable } from '@angular/core';
import {Observable, of, Subject } from 'rxjs';
import { switchMap, map, switchMapTo } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MainHeaderService {

    sidebarStatus = new Subject;
    sideBarState: boolean = false;

    constructor() { }
    sidebarToggle() {
        this.sideBarState = !this.sideBarState;
        this.sidebarStatus.next(this.sideBarState);
        // console.log(this.sidebarStatus)
    }

}