import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    carName = '';
    addCarStatus = false;
    cars = ['Ford', 'Audi', 'Bmw'];
    items = [
        {
            id: 1,
            name: 'item 1'
        },
        {
            id: 2,
            name: 'item 2'
        },
        {
            id: 3,
            name: 'item 3'
        }
    ];

    constructor() {

    }

    addCar() {
        this.addCarStatus = true;
        this.cars.push(this.carName);
        this.carName = '';
    }
}
