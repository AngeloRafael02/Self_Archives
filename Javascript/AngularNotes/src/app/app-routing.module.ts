import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingSampleComponent } from './routing-sample/routing-sample.component';

const routes: Routes = [
  {path: "routing-Sample", component: RoutingSampleComponent } //we can add more component with their new path, as opposed of module.ts handling all the components
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
export const routingComponents = [RoutingSampleComponent]
