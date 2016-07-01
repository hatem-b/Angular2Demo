import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


var html = `<div class="card-image">				
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
			`;


@Component({
  selector: 'car-card',
  template: html,
  directives: [ROUTER_DIRECTIVES]
})

export class CarCardComponent {
  @Input() car;
  

  constructor() {
    
  }
}

