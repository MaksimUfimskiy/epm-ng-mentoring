import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../data/course';

@Component({
    selector: 'epm-courses-page',
    templateUrl: './epm-courses-page.component.html',
    styleUrls: ['./epm-courses-page.component.css']
})
export class EpmCoursesPageComponent implements OnInit {

    public courses: ICourse[];

    constructor() {
        this.courses = [];
    }

    ngOnInit() {
        console.log('ngOnInit EpmCoursesPageComponent');
        this.courses = [
            {
                id: 0,
                title: 'Video Course 1',
                creationDate: new Date(),
                duration: 85,
                description: 'description description description description description description description description description '
            },
            {
                id: 1,
                title: 'Video Course 2',
                creationDate: new Date(),
                duration: 78,
                description: 'description description description description description description description description description '
            },
            {
                id: 2,
                title: 'Video Course 3',
                creationDate: new Date(),
                duration: 85,
                description: 'description description description description description description description description description '
            },
            {
                id: 3,
                title: 'Video Course 4',
                creationDate: new Date(),
                duration: 78,
                description: 'description description description description description description description description description '
            },
            {
                id: 4,
                title: 'Video Course 5',
                creationDate: new Date(),
                duration: 78,
                description: 'description description description description description description description description description '
            },
            {
                id: 5,
                title: 'Video Course 6',
                creationDate: new Date(),
                duration: 85,
                description: `description description description description description description description description description 
                    description description description description description description description description description 
                    description description description description description description description description description description description description description description description description description description 
                    description description description description description description description description description `
            },
            {
                id: 6,
                title: 'Video Course 7',
                creationDate: new Date(),
                duration: 78,
                description: 'description description description description description description description description description '
            }
        ];
    }
    ngOnChanges(changes: any) {
        console.log('ngOnChanges', changes);
    }
    ngDoCheck() {
        console.log('ngDoCheck');
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    public loadMore(): void {
        console.log('loadMore');
        this.courses.push({
            id: Math.floor(Math.random() * 1000000),
            title: 'Video Course',
            creationDate: new Date(),
            duration: Math.floor(Math.random() * 1000),
            description: 'New description'
        });
    }
    public onCourseDeleted(id: number): void {
        console.log(`Course with ID: ${id} is deleted`);
    }
}
