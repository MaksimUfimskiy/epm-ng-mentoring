import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmLogoComponent } from './epm-logo.component';

describe('EpmLogoComponent', () => {
  let component: EpmLogoComponent;
  let fixture: ComponentFixture<EpmLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
