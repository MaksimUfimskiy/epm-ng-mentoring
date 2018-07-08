import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../data/course';

@Pipe({ name: 'coursesOrder' })
export class CoursesOrderPipe implements PipeTransform {
    transform(allCourses: ICourse[]): ICourse[] {
        return allCourses.sort((a, b) => a.creationDate < b.creationDate ? 1 : 0);
    }
}