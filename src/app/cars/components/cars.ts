import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'cars',
  templateUrl: 'app/cars/index.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [CarsService]
})

export class CarsComponent {  

  constructor() {
    
  }
}
