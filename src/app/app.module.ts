import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DisplayComponent } from './display/display.component';
import { ControlComponent } from './control/control.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database-deprecated';

import { AuthService } from './auth.service';
import { CounterListComponent } from './counter-list/counter-list.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DisplayComponent,
    ControlComponent,
    RegisterFormComponent,
    CounterListComponent
  ],
  //poner import de la libreria q estoy usando 
  imports: [
    BrowserModule,
    ReactiveFormsModule ,// <-- #2 add to @NgModule imports
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
