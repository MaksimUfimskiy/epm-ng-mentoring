import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../data/course';
import { CoursesSearchPipe } from '../../pipes/courses-search.pipe';
import { CoursesService } from '../../services/courses.service';

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

    constructor(private searchCourses: CoursesSearchPipe, private coursesService: CoursesService) {
        this.courses = [];
    }

    ngOnInit() {
        this.courses = this.coursesService.getCourses();
        this.allCourses = Object.assign([], this.courses);
    }
 
    public loadMore(): void {
        this.allCourses = this.coursesService.createCourse();
        this.filterCourses();
    }
    public onCourseDeleted(id: number): void {
        const confirmed = confirm('Do you really want to delete this course?');
        if (confirmed) {
            this.allCourses = this.coursesService.removeCourse(id);
            this.filterCourses();
        }
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
}
