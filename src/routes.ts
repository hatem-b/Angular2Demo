/// <reference path="../typings/index.d.ts"/>

import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2/router';
import {HomeComponent} from './app/home/home.component';
import {CarsComponent} from './app/cars/cars.component';
import {CarListComponent} from './app/cars/car.list.component';


const INITIAL_STATES: any[] = [
  {name: 'App', url: '/', component: HomeComponent},
  {name: 'cars', url: '/cars', component: CarsComponent},
  {name: 'cars.list', url: '/cars/list', component: CarListComponent}
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise(() => uiRouter.stateService.go('App', null, null));
    uiRouter.stateRegistry.root();
    INITIAL_STATES.forEach(state => uiRouter.stateRegistry.register(state));
  }
}
