import { RouterConfig }          from '@angular/router';
import {CarsComponent} from './components/cars';
import {CarListComponent} from './components/car.list';
import {CarComponent} from './components/car';
import {CarFormComponent} from './components/carForm';
import {CarListCardsComponent} from './components/car.list.cards';
import {CarListTableComponent} from './components/car.list.table';

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