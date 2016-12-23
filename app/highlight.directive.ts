import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    private _defaultColor = 'red';

    constructor(private el: ElementRef) {
    }

    @Input('myHighlight') highlightColor: string;

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter') onMouseEnter1() {
        this.highlight(this._defaultColor || this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave1() {
        this.highlight(null);
    }
}