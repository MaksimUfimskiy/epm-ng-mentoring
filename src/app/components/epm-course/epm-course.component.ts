import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../data/course';
import icons from 'glyphicons';

@Component({
    selector: 'epm-course',
    templateUrl: './epm-course.component.html',
    styleUrls: ['./epm-course.component.css']
})
export class EpmCourseComponent implements OnInit {

    @Input() course: ICourse;
    @Output() courseDeleted = new EventEmitter<number>();
    public icons: any;

    constructor() { }

    ngOnInit() {
        this.icons = icons;
        const hours = Math.floor(this.course.duration / 60);
    }

    public editCourse(): ICourse {
        console.log('editCourse ', this.course.id);
        return this.course;
    }
    public deleteCourse(id: number): void {
        this.courseDeleted.emit(id);
    }
}
