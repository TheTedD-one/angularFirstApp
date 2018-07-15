import {Component} from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent {

    addCaqrStatus = '';
    inputText = '';

    constructor() {

    }

    addCar() {
        this.addCaqrStatus = 'yez';
    }

    onKeyUp(event) {
        this.inputText = event.target.value;
    }

    onKeyUp2(val) {
        this.inputText = val;
    }
}
