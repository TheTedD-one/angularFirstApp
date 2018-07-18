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
    colors = [
        'red',
        'blue',
        'green',
        'pink',
        'yellow',
        'grey'
    ];

    constructor(private carsService: CarsService) {}

    loadCars() {
        this.carsService.getCars().subscribe((cars: Cars[]) => {
            this.cars = cars;
        });
    }

    addCar() {
        this.carsService.addCar(this.carName).subscribe((car: Cars) => {
            this.cars.push(car);
        });
    }

    getRandColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }

    setNewColor(car) {
        this.carsService.changeColor(car, this.getRandColor()).subscribe((data) => {});
    }

    deleteCar(car) {
        this.carsService.deleteCar(car).subscribe((data) => {
            this.cars = this.cars.filter(c => c.id !== car.id);
        });
    }
}
