import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';
import {Response} from '@angular/http';

interface Cars {
    name: string;
    color: string;
    id: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    carName: string = '';
    cars: Cars[] = [];

    constructor(private carsService: CarsService) {}

    loadCars() {
        this.carsService.getCars().subscribe((cars: Cars[]) => {
            this.cars = cars;
        });
    }

    addCar() {
        this.carsService.addCar(this.carName).subscribe((json) => {
            console.log(json);
        });
    }
}
