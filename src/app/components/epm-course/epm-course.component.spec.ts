import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { EpmCourseComponent } from './epm-course.component';
import { ICourse } from '../../data/course';

describe('EpmCourseComponent', () => {
    let component: EpmCourseComponent;
    let fixture: ComponentFixture<EpmCourseComponent>;
    let hostFixture: ComponentFixture<TestHostComponent>;
    let testHost: any;
    let courseDatesEl: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmCourseComponent,
                TestHostComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EpmCourseComponent);
        component = fixture.componentInstance;
        component.course = {
            id: 12123,
            title: 'Mock title',
            creationDate: new Date(),
            duration: 13423,
            description: 'Mock description'
        };
        fixture.detectChanges();

        hostFixture = TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        courseDatesEl = fixture.nativeElement.querySelector('.epm-course-item__dates');
        hostFixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should calculate duration string', () => {
        expect(component.duration).toBeTruthy();
    });
    it('should return edited course', () => {
        const course = component.editCourse();
        expect(component.course).toBe(course);
    });
    it('raises the selected course when course deleted', () => {
        const comp = new EpmCourseComponent();
        const course: ICourse = {
            id: Math.floor(Math.random() * 1000000),
            title: 'Video Course',
            creationDate: new Date(),
            duration: Math.floor(Math.random() * 1000),
            description: 'New description'
        };
        comp.course = course;

        comp.courseDeleted.subscribe(deletedCourseId => expect(deletedCourseId).toBe(course.id));
        comp.deleteCourse(course.id);
    });
    it('should display course date in dd.MM.yyyy format', () => {
        const expectedCourseDate = '01.07.2018';
        expect(courseDatesEl.textContent).toContain(expectedCourseDate);
    });
});
@Component({
    template: `
      <epm-course
        [course]="course" (courseDeleted)="onCourseDeleted($event)">
      </epm-course>`
})
class TestHostComponent {
    course: ICourse = {
        id: 5555555555555555555555555,
        title: 'Video Course',
        creationDate: new Date('01.07.2018'),
        duration: 7777777777777777777,
        description: 'New description'
    };
    deletedCourse: ICourse;
    onCourseDeleted(course: ICourse) {
        this.deletedCourse = course;
    }
}