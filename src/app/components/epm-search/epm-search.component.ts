import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'epm-search',
    templateUrl: './epm-search.component.html',
    styleUrls: ['./epm-search.component.css']
})
export class EpmSearchComponent implements OnInit {
    public searchText: string = '';

    constructor() { }

    ngOnInit() {
    }
    public searchCourses(): void {
        console.log('searchText', this.searchText);
    }
}
