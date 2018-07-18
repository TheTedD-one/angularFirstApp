import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    defaultAnswer = 'no';
    defaultCountry = 'ru';
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
