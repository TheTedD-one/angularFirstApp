import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carName: string;
    carYear: number;
    @Output() onAddCar = new EventEmitter<{name: string, year: number}>();

  constructor() { }

  ngOnInit() {
  }

    addCar() {
      this.onAddCar.emit({
          name: this.carName,
          year: this.carYear,
      });
    }

}
