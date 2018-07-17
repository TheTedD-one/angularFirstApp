import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <input class="form-control" type="text" [(ngModel)]="searchCar">
            <button class="btn btn-primary" (click)="addCar()">Добавить</button>
            <hr>
            <ul class="list-group">
                <li *ngFor="let item of items | carFilter:searchCar; let idx = index" class="list-group-item"><b>{{ idx + 1 }}</b> - {{ item.name }}</li>
            </ul>
        </div>
    `
})
export class AppComponent {
    searchCar = '';
    items = [
        {name: 'Ford'},
        {name: 'Mazda'},
        {name: 'Bently'},
        {name: 'Audi'},
        {name: 'BMW'},
        {name: 'Mercedes'},
    ];

    addCar() {
        this.items.push({name: 'new car'});
    }
}
