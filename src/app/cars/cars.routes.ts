import { RouterConfig }          from '@angular/router';
import {CarsComponent} from './cars.component';
import {CarListComponent} from './car.list.component';
import {CarComponent} from './car.component';
import {CarFormComponent} from './carForm.component';
import {CarListCardsComponent} from './car.list.cards.component';
import {CarListTableComponent} from './car.list.table.component';

export const CarsRoutes: RouterConfig = [
  { path: 'cars',  component: CarsComponent,
  children: [
    { path: '', redirectTo : 'list'},  
    { path: 'add', component: CarFormComponent},    
  	{ path: 'list', component: CarListComponent, 
  	 children: [
      { path: '', component: CarListCardsComponent},
  	 	{ path: 'cards', component: CarListCardsComponent},
  	 	{ path: 'table', component: CarListTableComponent} 
  	 ] },
  	{ path: 'edit/:id', component: CarFormComponent},
    { path: ':id', component: CarComponent}
  ]},
  
];