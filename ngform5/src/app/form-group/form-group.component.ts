import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'; //form4

import { FormBuilder } from '@angular/forms';  //form8

import { Validators } from '@angular/forms'; //form9

import { AngularFirestore } from 'angularfire2/firestore'; //form11
import { Observable } from 'rxjs'; //form11

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})

export class FormGroupComponent {
 
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

  });
 
  constructor(
    private fb: FormBuilder, 
    db: AngularFirestore
    ) {
    this.items = db.collection('items').valueChanges();
   }

    //form11
  items: Observable<any[]>;
   
  onSubmit() {
    // TODO: Use EventEmitter with form value
  }


}
