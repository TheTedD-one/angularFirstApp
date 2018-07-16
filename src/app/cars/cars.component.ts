import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    carName = '';
    addCarStatus = false;
    cars = ['Ford', 'Audi', 'Bmw', 'Mazda', 'Lada', 'Bently'];
    items = [
        new Date(2015, 3, 8),
        new Date(2016, 7, 1),
        new Date(2017, 10, 6),
        new Date(2018, 37, 5),
    ]

    constructor() {

    }

    addCar() {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }


}
