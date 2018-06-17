import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmFooterComponent } from './epm-footer.component';

describe('EpmFooterComponent', () => {
  let component: EpmFooterComponent;
  let fixture: ComponentFixture<EpmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
