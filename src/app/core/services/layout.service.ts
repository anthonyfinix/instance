import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class LayoutService{
    device: Observable<any>
    constructor(breakpointObserver: BreakpointObserver) {
        this.device = breakpointObserver.observe([
            Breakpoints.Small,
            Breakpoints.HandsetLandscape,
            Breakpoints.HandsetPortrait
        ])
    }

}
