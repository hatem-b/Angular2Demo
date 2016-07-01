import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Car } from '../car.model';

@Component({
  selector: 'car-form',
  templateUrl: 'app/cars/views/carForm.html',
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class CarFormComponent {
  car = {};
	sub;
	loaded = false;

  constructor(
  		private route: ActivatedRoute,
		private router: Router,
		private carsService: CarsService) {
    
  }

  ngOnInit() {
  	var id = this.route.snapshot.params['id'];
  	if (id){	  		
		     this.carsService.getCar(id)
		     .then(car => {this.loaded = true; this.car = car;});
		 } else {
		 	this.loaded = true;
       this.car = {};
		 }
		
	}

  save(){
    console.log(this.car, this.car['id']);

    if (!this.car['id']) {
      this.carsService.create(this.car)
        .then(res => this.router.navigate(["cars"]));
    } else {
      this.carsService.update(this.car)
        .then(res => this.router.navigate(["cars"]));
    }
  }
}
