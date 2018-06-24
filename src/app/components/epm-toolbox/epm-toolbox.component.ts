import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'epm-toolbox',
    templateUrl: './epm-toolbox.component.html',
    styleUrls: ['./epm-toolbox.component.css']
})
export class EpmToolboxComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    public addCourse(): void {
        console.log('addCourse');
    }
}
