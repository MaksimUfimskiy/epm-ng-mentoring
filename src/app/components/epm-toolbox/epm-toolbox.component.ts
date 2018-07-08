import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'epm-toolbox',
    templateUrl: './epm-toolbox.component.html',
    styleUrls: ['./epm-toolbox.component.css']
})
export class EpmToolboxComponent implements OnInit {

    @Output() coursesSearched = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }
    public addCourse(): void {
        console.log('addCourse');
    }
    public onCourseSearched(searchText: string): void {
        this.coursesSearched.emit(searchText);
    }
}
