import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { Tabs } from '../../shared/directives/tabs';
import {FilterPipe} from "../../shared/pipes/filter";

@Component({
  selector: 'car-list',
  templateUrl: 'app/cars/views/car.list.html',
  directives: [ROUTER_DIRECTIVES, Tabs],
  pipes: [FilterPipe]
})


export class CarListComponent {
  cars : any[];
  loaded = false;

  constructor(private carsService: CarsService, private router: Router) {
    var self = this;

	  carsService.loadCars()
    .then(function (response) {
      self.cars = response;
			self.loaded = true;
		});
  }
}
