import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class CarsComponent {
    cars = [
        {
            name: "Ford",
            year: 2005,
        },
        // {
        //     name: "Mazda",
        //     year: 2008,
        // },
        // {
        //     name: "Mercedes-benz",
        //     year: 2015,
        // },
    ];

    constructor() {

    }

    updateCarList(car: {name: string, year: number}) {
        this.cars.push(car);
    }

    changeCarName() {
        this.cars[0].name = 'New car name';
    }

    deleteCar() {
        this.cars.splice(0, 1);
    }
}
