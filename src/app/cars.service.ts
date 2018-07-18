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
        return this.http.post('http://localhost:3000/cars', {name: carName, color: 'blue'})
            .pipe(map((response: Response) => response.json()));
    }
}