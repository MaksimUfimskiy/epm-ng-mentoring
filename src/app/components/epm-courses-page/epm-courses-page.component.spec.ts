import { Component, Input, Output, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EpmCoursesPageComponent } from './epm-courses-page.component';
import { ICourse } from '../../data/course';
import { MockBreadCrumbComponent, MockSearchComponent, MockToolboxComponent, MockCourseComponent } from '../../mocks/mock.components';

describe('EpmCoursesPageComponent', () => {
    let component: EpmCoursesPageComponent;
    let fixture: ComponentFixture<EpmCoursesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmCoursesPageComponent,
                MockBreadCrumbComponent,
                MockToolboxComponent,
                MockCourseComponent,
                MockSearchComponent
            ],
            imports: [
                FormsModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EpmCoursesPageComponent);
        component = fixture.componentInstance;
    });

    it('should not have mock array of courses after construction', () => {
        expect(component.courses).toEqual([]);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init mock array of courses', () => {
        component.ngOnInit();
        expect(component.courses).toBeDefined();
    });
    it('should load 1 additional course', () => {
        component.ngOnInit();
        const initialLength = component.courses.length;
        component.loadMore();
        expect(component.courses.length).toEqual(initialLength + 1);
    });
});
