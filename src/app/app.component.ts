import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    @ViewChild('form') form: NgForm;

    defaultAnswer = 'no';
    defaultCountry = 'ru';
    formData = {};
    isSubmited = false;

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
        this.isSubmited = true;
        this.formData = this.form.value;
        this.form.reset();
    }

    addRandEmail() {
        const randEmail = 'test@gmail.com';
        // this.form.setValue({
        //    user: {
        //        pass: '',
        //        email: randEmail,
        //    },
        //     country: '',
        //     answer: '',
        // });


        this.form.form.patchValue({
            user: {email: randEmail}
        });
    }
}
