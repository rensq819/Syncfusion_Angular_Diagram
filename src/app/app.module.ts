import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EJAngular2Module } from 'ej-angular2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DiagramComponent } from './diagram/diagram.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FaqComponent } from './faq/faq.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    FaqComponent  
  ],
  imports: [
    BrowserModule, 
    EJAngular2Module.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
