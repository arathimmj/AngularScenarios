import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentGrandParentComponent } from './component-grand-parent/component-grand-parent.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';
import { ComponentChildComponent } from './component-child/component-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentGrandParentComponent,
    ComponentParentComponent,
    ComponentChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
