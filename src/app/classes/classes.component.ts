import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit, OnDestroy {
  title: string;
  dataSource:any;
  ELEMENT_DATA:any[];
  displayedColumns: string[] = [];
  paramSub: Subscription;
  collection$: Observable<unknown[]>;

  constructor(
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore
  ) {
    this.displayedColumns = [];
    this.ELEMENT_DATA = [];
  }

  ngOnInit() {
    this.paramSub = this.actRoute.paramMap.subscribe(data => {
      this.title = data.get('class');
      this.collection$ = this.afs.collection(`/${this.title}`).valueChanges();
      this.collection$.subscribe(data=>{
        this.ELEMENT_DATA = data;
        let fields = []
        data.forEach(obj=>{
          fields = Object.keys(obj)
        })
        this.displayedColumns = [... new Set(fields)]
        this.dataSource = this.ELEMENT_DATA;
      })
    })
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe()
  }
}
