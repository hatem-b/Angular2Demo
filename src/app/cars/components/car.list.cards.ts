import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { CarCardComponent } from './car.card';

@Component({
  selector: 'car-list-cards',
  templateUrl: 'app/cars/views/car.list.cards.html',
  directives: [ROUTER_DIRECTIVES, CarCardComponent]
})
export class CarListCardsComponent {
  carsAsync; 


  constructor(private carsService: CarsService, public router: Router) {
      this.carsAsync = carsService.getCars();
  }
}
