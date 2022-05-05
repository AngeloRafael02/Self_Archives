import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceSampleService } from './service-sample.service';
import { AppRoutingModule,routingComponents } from './app-routing.module';

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
import { ServiceSampleComponent } from './service-sample/service-sample.component';
import { RoutingSampleComponent } from './routing-sample/routing-sample.component';


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
    ServiceSampleComponent,
    routingComponents, //RoutingSampleComponent. Everytime we add a new component  we can just specify on the routing.module.ts
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServiceSampleService], //<- A service file
  bootstrap: [AppComponent]
})
export class AppModule { }
