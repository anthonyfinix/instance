import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  classes: Observable<any[]>
  title: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
  ) {
  }
  
  ngOnInit() {
    this.classes = this.afs.collection(`/classes`).valueChanges();
  }

}
