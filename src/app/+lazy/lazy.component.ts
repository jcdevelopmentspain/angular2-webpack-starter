import { Component } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Lazy Load Component` component loaded asynchronously');

@Component({
  selector: 'lazy',
  template: `
    <h1>Hello from Lazy Component</h1>
    <router-outlet></router-outlet>
  `
})
export class LazyComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Lazy` component');
  }

}
