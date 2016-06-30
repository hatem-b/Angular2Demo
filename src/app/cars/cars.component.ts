import {Component} from '@angular/core';
import {CarListComponent} from './car.list.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'cars',
  templateUrl: 'app/cars/index.html',
  directives: [ROUTER_DIRECTIVES]
})

export class CarsComponent {  

  constructor() {
    
  }
}
