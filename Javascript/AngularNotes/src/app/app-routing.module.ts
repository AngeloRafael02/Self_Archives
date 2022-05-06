import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSampleComponent } from './routing-sample/routing-sample.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';

const routes: Routes = [
  {path:"", redirectTo:'routing-Sample', pathMatch:"full"}, //default is at the top, REDIRECT, when url is ''
  {path: "routing-Sample", component: RoutingSampleComponent }, //we can add more component with their new path, as opposed of module.ts handling all the components
  {path: "**", component:WildcardRouteComponent}, //<= for when error 404. NOTE: Wildcard rout should be the last one in the array
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RoutingSampleComponent, WildcardRouteComponent]
