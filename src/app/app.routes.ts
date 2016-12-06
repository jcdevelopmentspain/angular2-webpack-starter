import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { CustomModuleLoading } from './app.custom-preload-strategy.ts'

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'customLazy', 
    loadChildren:'./+customLazy/index',
    data: {preload: true} 

  },
  {
    path: 'lazy', 
    loadChildren:'./+lazy/index'
  },
  { path: '**',    component: NoContentComponent },
];

export const AppRoutesModule = RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomModuleLoading });
export const APP_ROUTES_MODULE_PROVIDER = [CustomModuleLoading];