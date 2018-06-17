import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmCoursesPageComponent } from './epm-courses-page.component';

describe('EpmCoursesPageComponent', () => {
  let component: EpmCoursesPageComponent;
  let fixture: ComponentFixture<EpmCoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmCoursesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
