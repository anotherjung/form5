import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms'; //form2

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  name = new FormControl(''); //form2

  //form4
  updateName() {
    this.name.setValue('Batman');
  }

  ngOnInit() {
  }

}
