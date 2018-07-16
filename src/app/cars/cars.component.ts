import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})

export class CarsComponent {

    carName: string;
    carYear: number;
    cars: [{name: string, year: number}] = [
        {
            name: 'Ford',
            year: 2005,
        },
        {
            name: 'Mazda',
            year: 2008,
        },
        {
            name: 'Mercedes-benz',
            year: 2015,
        },
    ];

    constructor() {

    }

    addCar() {
        this.cars.push({
            name: this.carName,
            year: this.carYear,
        });
    }


}
