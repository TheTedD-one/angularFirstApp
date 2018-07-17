import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.background = 'red'
        this.renderer.addClass(this.element.nativeElement, 'white-text');
    }

    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.element.nativeElement, 'background', 'blue');
        this.background = 'blue';
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background', 'red');
        this.background = 'red';
    }
}
