import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { EpmHeaderComponent } from './components/epm-header/epm-header.component';
import { EpmFooterComponent } from './components/epm-footer/epm-footer.component';
import { EpmLogoComponent } from './components/epm-logo/epm-logo.component';
import { EpmCoursesPageComponent } from './components/epm-courses-page/epm-courses-page.component';
import { EpmToolboxComponent } from './components/epm-toolbox/epm-toolbox.component';
import { EpmSearchComponent } from './components/epm-search/epm-search.component';
import { EpmCourseComponent } from './components/epm-course/epm-course.component';
import { EpmCoursesContainerComponent } from './components/epm-courses-container/epm-courses-container.component';
import { EpmBreadcrumbComponent } from './components/epm-breadcrumb/epm-breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    EpmHeaderComponent,
    EpmFooterComponent,
    EpmLogoComponent,
    EpmCoursesPageComponent,
    EpmToolboxComponent,
    EpmSearchComponent,
    EpmCourseComponent,
    EpmCoursesContainerComponent,
    EpmBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
