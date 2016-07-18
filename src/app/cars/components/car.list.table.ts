import {Component, Input} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { CarRowComponent } from './car.row';
import {FilterPipe} from "../../shared/pipes/filter";

@Component({
  selector: 'car-list-table',
  templateUrl: 'app/cars/views/car.list.table.html',
  directives: [ROUTER_DIRECTIVES, CarRowComponent],
  pipes: [FilterPipe]
})
export class CarListTableComponent {
  carsAsync;
  loaded = false;

  constructor(private carsService: CarsService,  public router: Router) {
    this.carsAsync = carsService.getCars();
    this.carsAsync.then(() => {this.loaded = true;});
  }
}
