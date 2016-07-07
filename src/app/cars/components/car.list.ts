import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { Tabs } from '../../shared/directives/tabs';

@Component({
  selector: 'car-list',
  templateUrl: 'app/cars/views/car.list.html',
  directives: [ROUTER_DIRECTIVES, Tabs]
})


export class CarListComponent {
  cars : any[];
  loaded = false;

  constructor(private carsService: CarsService, private router: Router) {
    var self = this;

    var a : any;
    a = router;

    console.log(router.url);
    

	  carsService.loadCars()
    .then(function (response) {
      self.cars = response;
			self.loaded = true;
		});
  }
}
