import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ServerUrl } from '../../server_url';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
	BASE_URL = ServerUrl + "/cars/";
	carsAsync;

	constructor (private http: Http) {
		
	}

	getCars() {
		if (!this.carsAsync) {
			this.loadCars();
		}
		return this.carsAsync;
	};

	loadCars() {
		this.carsAsync = this.http.get(this.BASE_URL)
				.map(res => res.json())
				.toPromise();

		return this.carsAsync;
	};

	getCar(id) {
		return this.http.get(this.BASE_URL + id)
				.map(res => res.json())
				.toPromise();
	};

	create(car) {
		return this.http.post(this.BASE_URL, {
			data: car
		})
		.map(res => res.json())
		.toPromise();
	};

	update(car) {
		return this.http.put(this.BASE_URL, {
			data: car
		})
		.map(res => res.json())
		.toPromise();
	};

	delete(id) {
		return this.http.delete(this.BASE_URL + id)
				.map(res => res.json())
				.toPromise();
	};

}