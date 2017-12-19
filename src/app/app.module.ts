import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { ToolboxComponent } from './shared-components/toolbox/toolbox.component';
import { SearchableItemComponent } from './shared-components/searchable-item/searchable-item.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthorizationService } from './shared-services/authorization/authorization.service';
import { AppRoutingModule } from './app-routing.module';

import { OverlayModule } from '@angular/cdk/overlay';
import { ConfirmationDialogComponent } from './shared-components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmaitonDialogOverlayService } from './shared-services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';
import { FreshCourseDirective } from './directives/attribute-directives/fresh-course.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    ToolboxComponent,
    SearchableItemComponent,
    CoursesComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    FreshCourseDirective,
    OrderByPipe,
    DurationPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, OverlayModule],
  providers: [AuthorizationService, ConfirmaitonDialogOverlayService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule {}
