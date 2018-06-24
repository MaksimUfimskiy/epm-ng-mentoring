import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmBreadcrumbComponent } from './epm-breadcrumb.component';

describe('EpmBreadcrumbComponent', () => {
  let component: EpmBreadcrumbComponent;
  let fixture: ComponentFixture<EpmBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
