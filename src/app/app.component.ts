import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    answers = [
        {
            type: 'yes',
            text: 'Да'
        },
        {
            type: 'no',
            text: 'Нет'
        }
    ];

    ngOnInit() {

    }
}
