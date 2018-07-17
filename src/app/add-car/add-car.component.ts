import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carName: string;
    carYear: number;
    @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
    @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

    addCar(carNameEl: HTMLInputElement) {
      this.onAddCar.emit({
          name: carNameEl.value,
          year: +this.carYearInput.nativeElement.value,
      });
    }

}
