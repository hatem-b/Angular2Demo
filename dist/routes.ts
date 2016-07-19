import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {CarsRoutes} from './app/cars/cars.routes';



export const routes: RouterConfig = [
  { path: '', redirectTo : '/home', terminal : true },
  { path: 'home', component: HomeComponent },
  ...CarsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];