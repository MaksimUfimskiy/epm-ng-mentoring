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
import { BorderHighlightDirective } from './directives/border-highlight-directive/border-highlight.directive';
import { DuratioPipe } from './pipes/course-duration.pipe';
import { CoursesOrderPipe } from './pipes/courses-order.pipe';
import { LoginComponent } from './components/login-page/login-page.component';

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
        EpmBreadcrumbComponent,
        BorderHighlightDirective,
        DuratioPipe,
        CoursesOrderPipe,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
