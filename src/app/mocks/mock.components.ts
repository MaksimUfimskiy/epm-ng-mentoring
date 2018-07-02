import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../data/course';
@Component({
    selector: 'epm-breadcrumb',
    template: '<p>Mock Breadcrumb Component</p>'
})
export class MockBreadCrumbComponent { }

@Component({
    selector: 'epm-search',
    template: '<p>Mock Search Component</p>'
})
export class MockSearchComponent { }

@Component({
    selector: 'epm-toolbox',
    template: '<p>Mock Breadcrumb Component</p>'
})
export class MockToolboxComponent { }

@Component({
    selector: 'epm-course',
    template: '<p>Mock Course Component</p>'
})
export class MockCourseComponent {
    @Input() course: ICourse;
    @Output() courseDeleted = new EventEmitter<number>();
    public duration: string;
}
@Component({
    selector: 'epm-logo',
    template: '<p>Mock Logo Component</p>'
})
export class MockLogoComponent { }

@Component({
    selector: 'epm-header',
    template: '<p>Mock Header Component</p>'
})
export class MockHeaderComponent { }

@Component({
    selector: 'epm-footer',
    template: '<p>Mock Footer Component</p>'
})
export class MockFooterComponent { }

@Component({
    selector: 'epm-courses-page',
    template: '<p>Mock Breadcrumb Component</p>'
})
export class MockCoursesPageComponent { }

