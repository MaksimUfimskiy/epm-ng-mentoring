import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmCourseComponent } from './epm-course.component';

describe('EpmCourseComponent', () => {
  let component: EpmCourseComponent;
  let fixture: ComponentFixture<EpmCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
