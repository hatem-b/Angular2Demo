import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ImageBox } from '../../shared/directives/imgbox';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

var html = `<div class="card small"  @flyInOut="'in'">	
				<div class="card-image" >				
					<img class="materialboxed" src="{{car.img}}"/>
					<span class="card-title">{{car.model}}</span>
				</div>
				<div class="card-content">	
						{{car.manufacturer}}<br/>
				</div>
				<div class="card-action"> 
					<a href="#" [routerLink]="['/cars/'+car.id]" 
					class="waves-effect waves-light btn-flat"><i class="material-icons right">info</i>View details</a>\
				</div>

			</div>
			`;


@Component({
  selector: 'car-card',
  template: html,
  directives: [ROUTER_DIRECTIVES, ImageBox],
  animations: [
	  trigger('flyInOut', [
	    //state('in', style({transform: 'translateX(0)'})),
	    transition('void => *', [
	      style({transform: 'translateX(-100%)'}),
	      animate("500ms")
	    ]),
	    transition('* => void', [
	      animate("500ms", style({transform: 'translateX(100%)'}))
	    ])
	  ])
	]
})

export class CarCardComponent {
  @Input() car;
  

  constructor() {
    
  }
}

