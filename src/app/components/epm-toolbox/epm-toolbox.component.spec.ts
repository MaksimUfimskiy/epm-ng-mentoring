import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmToolboxComponent } from './epm-toolbox.component';

describe('EpmToolboxComponent', () => {
  let component: EpmToolboxComponent;
  let fixture: ComponentFixture<EpmToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
