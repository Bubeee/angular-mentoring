import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { EditCourseComponent } from './pages/courses/edit-course/edit-course.component';
import { PickerComponent } from './shared-components/picker/picker.component';
import { DurationInputComponent } from './shared-components/duration-input/duration-input.component';
import { DateInputComponent } from './shared-components/date-input/date-input.component';
import { HttpModule } from '@angular/http';
import { AddCourseComponent } from './pages/courses/add-course/add-course.component';
import { HttpClientModule  } from '@angular/common/http';
import { AuthorizationInterceptor } from './common/services/authorization/authorization-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    EditCourseComponent,
    PickerComponent,
    DurationInputComponent,
    DateInputComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OverlayModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService,
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
