import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course/course.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogoComponent } from './shared/logo/logo.component';
import { LoginComponent } from './shared/login/login.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
