import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChildComponent } from './componentbasic/child.component';
import { Child1Component } from './propertybind/child1.component'
import { Child2Component } from './classbind/child2.component';
import { StylebindComponent } from './stylebind/stylebind.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    StylebindComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
