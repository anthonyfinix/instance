import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-classes',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit, OnDestroy {
  title: string;
  dataSource: any;
  ELEMENT_DATA: any[];
  displayedColumns: string[] = [];
  collection$: Observable<unknown[]>;
  paramSub: Subscription;
  collectionSub: Subscription;

  constructor(
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore
  ) {
    this.displayedColumns = [];
    this.ELEMENT_DATA = [];
  }

  ngOnInit() {

    this.paramSub = this.actRoute.paramMap.subscribe(params => {
      this.afs.collection(`/classes`).doc(`${params.get('class')}`).get().subscribe(doc => {
        if (doc.exists) {
          this.collection$ = this.afs.collection(`/${params.get('class')}`).valueChanges();
          this.title = params.get('class');
          this.collectionSub = this.collection$.subscribe(data => {
            this.ELEMENT_DATA = data;
            let fields = []
            data.forEach(obj => {
              fields = Object.keys(obj)
            })
            this.displayedColumns = [... new Set(fields)]
            this.dataSource = this.ELEMENT_DATA;
          })

        } else {
          this.title = 'sorry'
        }
      })
    })
  }
  ngOnDestroy() {
    this.paramSub.unsubscribe()
    this.collectionSub.unsubscribe()
  }
}
