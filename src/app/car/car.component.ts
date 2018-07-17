import {
    Component,
    Input,
    ViewChild,
    ElementRef,
    ContentChild,
    OnInit,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

    @Input() name: string;
    @ContentChild('carHeading') carHeading: ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngDoCheck() {
        console.log('doCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('AfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

}
