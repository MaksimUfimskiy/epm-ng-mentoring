import { Directive, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
    selector: '[borderHighlight]'
})
export class BorderHighlightDirective {
    @Input() courseDate: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        const today = moment(new Date());
        const courseDate = moment(this.courseDate);
        const twoWeeksAgo = moment(new Date()).subtract(14, 'days');
        let borderStyle;
        if (courseDate < today && courseDate >= twoWeeksAgo) {
            borderStyle = '2px solid green';
        } else if (courseDate > today) {
            borderStyle = '2px solid blue';
        }
        borderStyle && (this.el.nativeElement.style.border = borderStyle);
    }
}