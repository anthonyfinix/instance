import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CreateInstanceDialog } from '../dialoges/create.dialog';
import { AngularFireFunctions } from '@angular/fire/functions';

export interface Classes{
  count?: number,
  schema?: Object
}

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
  newInstanceSub: Subscription;
  newUserSub: Subscription;

  constructor(
    private actRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private dialog: MatDialog,
    private fns: AngularFireFunctions
  ) {
    this.displayedColumns = [];
    this.ELEMENT_DATA = [];
  }

  ngOnInit() {

    this.paramSub = this.actRoute.paramMap.subscribe(params => {
      let param = params.get('class');
      this.afs.collection(`/classes`).doc(`${param}`).get().subscribe(doc => {
        if (doc.exists) {
          this.collection$ = this.afs.collection(`/${param}`).valueChanges();
          this.title = param;
          this.collectionSub = this.collection$.subscribe(data => {
            this.ELEMENT_DATA = data;
            let fields = [];
            data.forEach(obj => { fields = Object.keys(obj) });
            this.displayedColumns = [... new Set(fields)];
            this.dataSource = this.ELEMENT_DATA;;
          })
        } else {
          this.title = 'sorry'
        }
      })
    })
  }

  createNewInstance(){
    this.newInstanceSub = this.afs.doc<Classes>(`/classes/${this.title}`).valueChanges().subscribe(instance=>{
      // console.log(data.schema);
      const dialogRef = this.dialog.open(CreateInstanceDialog,{width: '250px',data: instance.schema})
      dialogRef.afterClosed().subscribe(result => {
        
        const createUser = this.fns.httpsCallable('createUser');
        if (this.title == 'users') {
          this.newUserSub = createUser({email: result.email,password: result.password, displayName: result.displayName}).subscribe(data=>{
            console.log(data)
          })
        }
      });
    })
  }
  
  ngOnDestroy() {
    this.paramSub.unsubscribe()
    this.collectionSub.unsubscribe()
    this.newInstanceSub.unsubscribe()
    this.newUserSub.unsubscribe()
  }
}
