import { Injectable } from '@angular/core';
import { ICourse } from '../data/course';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    courses: ICourse[] = [
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

    constructor() { }

    getCourses(): ICourse[] {
        return this.courses;
    }

    createCourse(): ICourse[] {
        const newCourse = {
            id: Math.floor(Math.random() * 1000000),
            title: 'Video Course',
            creationDate: this.randomDate(new Date(2018, 5, 1), new Date(2018, 7, 1)),
            duration: Math.floor(Math.random() * 1000),
            topRated: !!Math.round(Math.random()),
            description: 'New description'
        };
        this.courses.push(newCourse);
        return this.courses;
    }

    getCourseById(id: number): ICourse {
        return this.courses.find(course => course.id === id);
    }

    updateCourse(id: number, newCourseData: ICourse): ICourse {
        let course = this.getCourseById(id);
        for (let property in course) {
            if (course.hasOwnProperty(property)) {
                course[property] = newCourseData[property];
            }
        }
        return course;
    }

    removeCourse(id: number): ICourse[] {
        this.courses.splice(this.courses.findIndex(course => course.id === id), 1);
        return this.courses;
    }
    private randomDate(start, end): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
}