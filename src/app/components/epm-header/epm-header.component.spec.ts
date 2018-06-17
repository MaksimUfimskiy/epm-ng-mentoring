import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmHeaderComponent } from './epm-header.component';

describe('EpmHeaderComponent', () => {
  let component: EpmHeaderComponent;
  let fixture: ComponentFixture<EpmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
