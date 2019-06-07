import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentSibling1Component } from './component-sibling1/component-sibling1.component';
import { ComponentSibling2Component } from './component-sibling2/component-sibling2.component';
import { DataService } from './service/data.service';
import {  HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ComponentSibling1Component,
    ComponentSibling2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
