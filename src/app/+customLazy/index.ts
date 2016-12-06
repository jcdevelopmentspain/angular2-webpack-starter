import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomLazyComponent } from './customLazy.component'; 

console.log('`Custom Lazy module` bundle loaded when the app is not overload ');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: CustomLazyComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    CustomLazyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class CustomLazyModule {
  static routes = routes;
}
