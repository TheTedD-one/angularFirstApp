import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    form: FormGroup;
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
        this.form = new FormGroup({
            email: new FormControl(''),
            pass: new FormControl(''),
            country: new FormControl('ru'),
            answer: new FormControl('no'),
        });
    }

    onSubmit() {
        console.log(this.form);
    }

}
