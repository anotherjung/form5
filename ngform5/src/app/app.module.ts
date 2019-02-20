import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component'; //form1

import { AngularFireModule } from 'angularfire2';  //form9
import { environment } from '../environments/environment'; //form9
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreformComponent } from './firestoreform/firestoreform.component'; //form9

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    FormGroupComponent,
    FirestoreformComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //form1
    AngularFireModule.initializeApp(environment.firebase), //form9
  AngularFirestoreModule, //form9 imports firebase/firestore, only needed for database features
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
