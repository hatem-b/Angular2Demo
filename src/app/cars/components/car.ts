import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';


@Component({
	selector: 'car',
	templateUrl: 'app/cars/views/car.html',
	directives: [ROUTER_DIRECTIVES]
})
export class CarComponent {
	car = {};
	sub;
	loaded = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private carsService: CarsService) {		

	}

	ngOnInit() {
		 //this.sub = this.route.params.subscribe(params => {
	     //let id = +params['id']; // (+) converts string 'id' to a number
	     this.carsService.getCar(this.route.snapshot.params['id'])
	     .then(car => {this.loaded = true; this.car = car});
	 	//});
	}

	ngOnDestroy() {
	  //this.sub.unsubscribe();
	}

	delete() {
		
		this.carsService.delete(this.car['id'])
		 	.then(res => this.router.navigate(["cars"]));
	};
}
