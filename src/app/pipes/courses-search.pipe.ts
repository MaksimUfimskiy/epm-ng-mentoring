import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../data/course';

@Pipe({ name: 'coursesSearch' })
export class CoursesSearchPipe implements PipeTransform {
    transform(allCourses: ICourse[], searchText: string): ICourse[] {
        return allCourses.filter(course => course.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1);
    }
}