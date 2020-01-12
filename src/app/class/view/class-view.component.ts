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

  constructor(
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore
  ) {

    this.displayedColumns = [];
    this.ELEMENT_DATA = [];
    // this.classCheck = this.afs.collection(`/classes`).doc(`${this.getCurrentParam()}`).get().subscribe(doc=>{
    //   if(doc.exists){
    //     this.collection$ = this.afs.collection(`/${this.getCurrentParam()}`).valueChanges();
    //     this.title = this.getCurrentParam();

    //   }else{
    //     this.title = 'sorry'
    //   }
    // })
    // this.actRoute.paramMap.subscribe(data=>{
    //   console.log(data.get('class'))
    // })
    this.actRoute.params.pipe(
      tap(data => {
        console.log(data)
      })
    )

  }

  ngOnInit() {
    // this.afs.collection(`/classes`).doc(`${this.getCurrentParam()}`).get().subscribe(doc=>{
    //   console.log(doc.id)
    // })
    // this.paramSub = this.actRoute.paramMap.subscribe(data => {
    //   // this.title = data.get('class');
    //   const docRef = this.afs.collection(`classes`).doc(`${data.get('class')}`);
    //   docRef.get().subscribe(doc=>{
    //     if (doc.exists) {
    //       this.title = data.get('class')
    //     }else{
    //       this.title = 'not a title'
    //     }
    //   })
    //   this.collection$ = this.afs.collection(`/${this.title}`).valueChanges();
    //   this.collection$.subscribe(data=>{
    //     this.ELEMENT_DATA = data;
    //     let fields = []
    //     data.forEach(obj=>{
    //       fields = Object.keys(obj)
    //     })
    //     this.displayedColumns = [... new Set(fields)]
    //     this.dataSource = this.ELEMENT_DATA;
    //   })
    // })
  }
  ngOnDestroy() {
  }
}
