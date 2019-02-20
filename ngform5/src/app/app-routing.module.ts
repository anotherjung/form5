import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component'; //form5
import { FirestoreformComponent } from './firestoreform/firestoreform.component' //form22


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'formgroup', component: FormGroupComponent }, //form5
  { path: 'fireform', component: FirestoreformComponent }, //form22
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
