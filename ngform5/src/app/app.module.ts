import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component'; //form1

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, //form1
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
