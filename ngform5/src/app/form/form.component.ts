import { Component, OnInit } from '@angular/core';

//import { FormControl } from '@angular/forms'; //form2

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; //form12
import { AngularFirestore } from 'angularfire2/firestore';//form12

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder, 
    private afs: AngularFirestore) { }
  
  name = new FormControl(''); //form2

  //form4
  updateName() {
    this.name.setValue('Batman');
  }

  ngOnInit() {

  }

  
}
