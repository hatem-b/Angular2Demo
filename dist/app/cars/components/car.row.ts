import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


var html = `
			<td>{{car.manufacturer}}</td>
			<td>{{car.model}}</td>
			<td>{{car.price}}</td>
			<td ><a class="blue-text" href="{{car.wiki}}" target = "_blank" > {{car.wiki}}</a></td>
			<!-- <td><img src="{{ 'http://en.wikipedia.org/wiki/File:' + car.img}}"/></td> -->
			<td><img src="{{car.img}}" style="height:50px;width:100px;" /></td>
			`;


@Component({
  selector: '[car-row]',
  template: html,
  directives: [ROUTER_DIRECTIVES]
})

export class CarRowComponent {
  @Input() car;
  

  constructor() {
    
  }
}

