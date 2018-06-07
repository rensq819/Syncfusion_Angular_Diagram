import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EJAngular2Module } from 'ej-angular2';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DiagramComponent } from './diagram/diagram.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    FaqComponent,
    HeaderComponent,
    VendorComponent
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
