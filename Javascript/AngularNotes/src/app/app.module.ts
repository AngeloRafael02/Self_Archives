import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChildComponent } from './componentbasic/child.component';
import { Child1Component } from './propertybind/child1.component'
import { Child2Component } from './classbind/child2.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { ClockComponent } from './clock/clock.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    StylebindComponent,
    EventbindComponent,
    TemplatereferenceComponent,
    TwowaybindingComponent,
    ClockComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    ComponentInteractionComponent,
    PipesComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
