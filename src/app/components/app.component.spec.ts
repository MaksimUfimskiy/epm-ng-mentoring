import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MockBreadCrumbComponent,
        MockSearchComponent,
        MockToolboxComponent,
        MockCourseComponent,
        MockLogoComponent,
        MockCoursesPageComponent,
        MockFooterComponent,
        MockHeaderComponent } from '../mocks/mock.components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent,
        MockCoursesPageComponent,
        MockLogoComponent,
        MockBreadCrumbComponent,
        MockToolboxComponent,
        MockCourseComponent,
        MockSearchComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render app container', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.firstChild.className).toEqual('epm-app');
  }));
});
