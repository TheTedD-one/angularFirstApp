import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <h2>{{ name }}</h2>
            <h2>{{ name | lowercase }}</h2>
            <h2>{{ name | uppercase }}</h2>
            <h2>{{ name | slice:0:3 | uppercase }}</h2>
            <hr>
            <h2>{{ pi }}</h2>
            <h2>{{ pi | number:'1.2-2' }}</h2>
            <hr>
            <h2>{{ money | currency:'USD':false }}</h2>
            <hr>
            <h2>{{ date | date:'yyyy.MM.dd' }}</h2>
            <hr>
            <h2>{{ amount | percent }}</h2>
            <hr>
            <pre>{{ object | json }}</pre>
        </div>
    `
})
export class AppComponent {
    name = 'Ruslan';
    pi = Math.PI;
    money = 350;
    date = new Date();
    amount = 0.45;
    object = {
        foo: 'bar',
        baz: 'qux',
        nested:
            {
                xyz: 3,
                numbers: [1, 2, 3]
            }
    };
}
