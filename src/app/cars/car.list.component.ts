import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'car-list',
  templateUrl: 'app/cars/car.list.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CarListComponent {
  

  constructor() {
    
  }
}