import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;
    @Input('appBackground') hoverColor: string = 'red';
    @Input() defaultColor: string = 'blue';

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.background = this.defaultColor;
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
    }
}
