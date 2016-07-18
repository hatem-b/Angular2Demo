import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { CarCardComponent } from './car.card';
import {FilterPipe} from "../../shared/pipes/filter";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'car-list-cards',
  template: require('../views/car.list.cards.html'),
  directives: [ROUTER_DIRECTIVES, CarCardComponent],
  pipes: [FilterPipe]  
})
export class CarListCardsComponent {
  carsAsync; 
  loaded = false;

  constructor(private carsService: CarsService, public router: Router, private route : ActivatedRoute) {
      this.carsAsync = carsService.getCars();
      this.carsAsync.then(() => {this.loaded = true;});
  }

}
