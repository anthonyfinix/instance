import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class HeaderService{
    
    sideBarOpened: Observable<Boolean> = of(true);

    sideBarToggle(){
        this.sideBarOpened = this.sideBarOpened.pipe(
            switchMap(val=>{
                return of(!val)
            })
        );
    }

}