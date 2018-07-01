import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EpmHeaderComponent } from './epm-header/epm-header.component';
import { EpmFooterComponent } from './epm-footer/epm-footer.component';
import { EpmCoursesPageComponent } from './epm-courses-page/epm-courses-page.component';
import { EpmLogoComponent } from './epm-logo/epm-logo.component';
import { EpmBreadcrumbComponent } from './epm-breadcrumb/epm-breadcrumb.component';
import { EpmToolboxComponent } from './epm-toolbox/epm-toolbox.component';
import { EpmCourseComponent } from './epm-course/epm-course.component';
import { EpmSearchComponent } from './epm-search/epm-search.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EpmHeaderComponent,
        EpmFooterComponent,
        EpmCoursesPageComponent,
        EpmLogoComponent,
        EpmBreadcrumbComponent,
        EpmToolboxComponent,
        EpmCourseComponent,
        EpmSearchComponent
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
    console.dir(compiled);
    expect(compiled.firstChild.className).toEqual('epm-app');
  }));
});
