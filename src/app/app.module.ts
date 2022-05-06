import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppMaterialModule } from './shared/app-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';


import { environment } from './environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';

@NgModule({
  imports:      [ AppMaterialModule, FlexLayoutModule, BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, Page1Component, Page2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
