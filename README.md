form5
ng new ngform5
ng serve
ng g c home
ng g c form
>update app-routing.module.ts, test :4200

>>adding form
>form1
src/app/app.module.ts (excerpt)
content_copy
import { ReactiveFormsModule } from '@angular/forms'; //form1

@NgModule({
  imports: [
    // other imports ...
    ReactiveFormsModule
  ],
})
export class AppModule { }

>form2
src/app/form/form.component.ts
content_copy
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; //form2

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class NameEditorComponent {
  name = new FormControl(''); //form2
}


>form3
src/app/name-editor/name-editor.component.html
content_copy
<!-- form3 -->
<label>
  Name:
  <input type="text" [formControl]="name">
</label>

<p>
  Value: {{ name.value }}
</p>

>>creating formGroup, when you have many text fields
>form4
ng g c formGroup

>form5
>>upate routing, app-routing.module.ts
src/app/profile-editor/profile-editor.component.ts (form group)
content_copy
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}


//form6
src/app/profile-editor/profile-editor.component.html (template form group)
content_copy
<!-- form6 -->
<form [formGroup]="profileForm">
  
  <label>
    First Name:
    <input type="text" formControlName="firstName">
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>

</form>


>form7
<!-- form7 -->
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  
  <label>
    First Name:
    <input type="text" formControlName="firstName">
  </label>

  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>

</form>

>form8
src/app/profile-editor/profile-editor.component.html (submit button)
content_copy
<!-- form8 -->
<button type="submit" [disabled]="!profileForm.valid">Submit</button>

>form9
src/app/profile-editor/profile-editor.component.ts (import)
content_copy
import { Validators } from '@angular/forms'; //form9


>build ng
ng build --prod

>>starting firebase 
>>go parent folder,
cd form5
firebase init
>>select single page apps
>update firebasebase.json
    "public": "ngform5/dist/ngform5",

firebase serve
>test :5000

npm install angularfire2 firebase --save

firebase deploy
>check https://contactform-196a0.firebaseapp.com

>form10
>add firebase keys, Open /src/environments/environment.ts and add your Firebase configuration. 

5&6. Setup @NgModule for the AngularFireModule & add firestore

Open /src/app/app.module.ts, inject the Firebase providers, and specify your Firebase configuration.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';  //form9
import { environment } from '../environments/environment'; //form9
import { AngularFirestoreModule } from 'angularfire2/firestore'; //form9


@NgModule({
imports: [
BrowserModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule, // imports firebase/firestore, only needed for database features
],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


>form11
7*8. Inject AngularFirestore & Blind to list 

TIP: should have collection (named items) & document (named = name & value = something) ex.  {name:’batman’}
Open /src/app/app.component.ts, and make sure to modify/delete any tests to get the sample working (tests are still important, you know):
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'; //form11
import { Observable } from 'rxjs'; //form11

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
    <!-- form11 -->
items: Observable<any[]>;
constructor(db: AngularFirestore) {
this.items = db.collection('items').valueChanges();
}
}

Open /src/app/app.component.html:
<!-- form11 -->
<ul>
  <li class="text" *ngFor="let item of items | async">
    {{item.name}}
  </li>
</ul>


<!-- form22 -->
ng g c firestoreform 
>update app-routing.module.ts, FirestoreformComponent




