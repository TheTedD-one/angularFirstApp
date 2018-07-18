import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {reject} from 'q';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    cars = [
        {
            name: 'Ford',
            color: 'White',
            id: 1
        }
    ];

    ngOnInit() {

    }

}
