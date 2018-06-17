import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmCoursesContainerComponent } from './epm-courses-container.component';

describe('EpmCoursesContainerComponent', () => {
  let component: EpmCoursesContainerComponent;
  let fixture: ComponentFixture<EpmCoursesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmCoursesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmCoursesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
