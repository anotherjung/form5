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