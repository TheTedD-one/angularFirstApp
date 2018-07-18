import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        input.ng-invalid.ng-touched {
            border-color: red;
        }
    `]

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

    submitForm(form: NgForm) {
        console.log(form);
    }
}
