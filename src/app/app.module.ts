import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ToolboxComponent } from './shared-components/toolbox/toolbox.component';
import { SearchableItemComponent } from './shared-components/searchable-item/searchable-item.component';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorizationService } from './common/services/authorization/authorization.service';
import { AppRoutingModule } from './app-routing.module';

import { OverlayModule } from '@angular/cdk/overlay';
import { ConfirmationDialogComponent } from './shared-components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmaitonDialogOverlayService } from './common/services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';
import { FreshItemDirective } from './common/directives/attribute-directives/fresh-item.directive';
import { OrderByPipe } from './common/pipes/order-by.pipe';
import { DurationPipe } from './common/pipes/duration.pipe';
import { SearchPipe } from './common/pipes/search.pipe';
import { PickerComponent } from './shared-components/controls/picker/picker.component';
import { DurationInputComponent } from './shared-components/controls/duration-input/duration-input.component';
import { DateInputComponent } from './shared-components/controls/date-input/date-input.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './common/services/authorization/authorization-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuardService } from './common/services/authorization/auth-guard.service.service';
import { CoursesService } from './pages/courses/courses.service/courses.service';
import { AuthorsService } from './pages/courses/authors.service/authors.service';
import { CourseComponent } from './pages/courses/course/course.component';
import { DatePipe } from '@angular/common';
import { BreadcrumbComponent } from './shared-components/breadcrumb/breadcrumb.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CourseReducer } from './pages/courses/store/course.reducer';
import { CourseEffects } from './pages/courses/store/course.effects';
import { LoginReducer } from './pages/login/store/login.reducer';
import { LoginEffects } from './pages/login/store/login.effects';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    HeaderComponent,
    FooterComponent,
    ToolboxComponent,
    SearchableItemComponent,
    CoursesListComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    FreshItemDirective,
    OrderByPipe,
    DurationPipe,
    SearchPipe,
    PickerComponent,
    DurationInputComponent,
    DateInputComponent,
    NotFoundComponent,
    CourseComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OverlayModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({
      CourseList: CourseReducer,
      Auth: LoginReducer
    }),
    EffectsModule.forRoot([CourseEffects, LoginEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    AuthorizationService,
    CoursesService,
    AuthorsService,
    DatePipe,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    ConfirmaitonDialogOverlayService,
    SearchPipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule {}
