import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../data/course';
import { CoursesSearchPipe } from '../../pipes/courses-search.pipe';

@Component({
    selector: 'epm-courses-page',
    templateUrl: './epm-courses-page.component.html',
    styleUrls: ['./epm-courses-page.component.css'],
    providers: [ CoursesSearchPipe ]
})
export class EpmCoursesPageComponent implements OnInit {

    public courses: ICourse[];
    public allCourses: ICourse[];
    searchText: string;

    constructor(private searchCourses: CoursesSearchPipe) {
        this.courses = [];
    }

    ngOnInit() {
        console.log('ngOnInit EpmCoursesPageComponent');
        this.courses = this.getMockData();
        this.allCourses = Object.assign([], this.courses);
    }
 
    public loadMore(): void {
        console.log('loadMore');
        this.allCourses.push({
            id: Math.floor(Math.random() * 1000000),
            title: 'Video Course',
            creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
            duration: Math.floor(Math.random() * 1000),
            topRated: !!Math.round(Math.random()),
            description: 'New description'
        });
        this.filterCourses();
    }
    public onCourseDeleted(id: number): void {
        console.log(`Course with ID: ${id} is deleted`);
    }
    public onCourseSearched(searchText: string): void {
        this.searchText = searchText;
        this.filterCourses();
    }
    private filterCourses(): void {
        if (this.searchText) {
            this.courses = this.searchCourses.transform(this.allCourses, this.searchText);
        } else {
            this.courses = this.allCourses;
        }
    }
    private randomDate(start, end): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    private getMockData(): ICourse[] {
        return [
            {
                id: 0,
                title: 'Spring Java Course 1',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 85,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            },
            {
                id: 1,
                title: 'Angular Course 2',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 78,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            },
            {
                id: 2,
                title: 'React Course 3',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 85,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            },
            {
                id: 3,
                title: 'Vue Course 4',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 78,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            },
            {
                id: 4,
                title: 'D3JS Course 5',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 78,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            },
            {
                id: 5,
                title: 'NodeJS Course 6',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 85,
                topRated: !!Math.round(Math.random()),
                description: `description description description description description description description description description 
                    description description description description description description description description description 
                    description description description description description description description description description description description description description description description description description description 
                    description description description description description description description description description `
            },
            {
                id: 6,
                title: 'Python Course 7',
                creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
                duration: 78,
                topRated: !!Math.round(Math.random()),
                description: 'description description description description description description description description description '
            }
        ];
    }
}
