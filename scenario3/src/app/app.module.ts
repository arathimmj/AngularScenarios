import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { ComponentChildComponent } from './component-child/component-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ComponentChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
