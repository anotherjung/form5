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