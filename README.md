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