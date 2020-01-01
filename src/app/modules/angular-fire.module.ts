import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ]
})
export class AngularFireModules { }
