import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';

@Injectable()

export class CarsService {
    constructor(private http: Http) {}

    getCars() {
        return this.http.get('http://localhost:3000/cars').pipe(map((response: Response) => response.json()));
    }

    addCar(carName: string) {
        return this.http.post('http://localhost:3000/cars', {name: carName, color: 'Blue'})
            .pipe(map((response: Response) => response.json()));
    }

    changeColor(car: any, color: string) {
        car.color = color;
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
            .pipe(map((response: Response) => response.json()));
    }

    deleteCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map((response: Response) => response.json()));
    }
}