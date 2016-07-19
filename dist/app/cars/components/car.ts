import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car.model';
import { ImageBox } from '../../shared/directives/imgbox';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
	selector: 'car',
	template: require('../views/car.html'),
	directives: [ROUTER_DIRECTIVES, ImageBox],
	animations: [
	  trigger('fadeIn', [
	    //state('in', style({opacity: 1, transform: 'translateX(0)'})),
	    transition('void => *', [
	      style({
	        opacity: 0,
	        transform: 'translateX(-100%)'
	      }),
	      animate('0.5s ease-in')
	    ]),
	    transition('* => void', [
	      animate('0.5s 10 ease-out', style({
	        opacity: 0,
	        transform: 'translateX(100%)'
	      }))
	    ])
	  ])
	]
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
