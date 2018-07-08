import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
    selector: 'epm-search',
    templateUrl: './epm-search.component.html',
    styleUrls: ['./epm-search.component.css']
})
export class EpmSearchComponent implements OnInit {
    @Output() coursesSearched = new EventEmitter<string>();
    public searchText: string = '';

    constructor() { }

    ngOnInit() {
    }
    public searchCourses(): void {
        this.coursesSearched.emit(this.searchText);
    }
}
