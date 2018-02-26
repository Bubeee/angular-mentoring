import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationPipe } from '../../../common/pipes/duration.pipe';
import { AuthorsService } from '../authors.service/authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from '../courses.service/courses.service';
import { DatePipe } from '@angular/common';

import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

class FakeAuthorsService extends AuthorsService {}

class FakeCoursesService extends CoursesService {}

class FakeHttpClient extends HttpClient {
  constructor() {
    super(null);
  }
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const httpClient: FakeHttpClient = new FakeHttpClient();

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourseComponent, DurationPipe],
        imports: [ReactiveFormsModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: FormBuilder, useValue: new FormBuilder() },
          {
            provide: AuthorsService,
            useValue: new FakeAuthorsService(null)
          },
          { provide: ActivatedRoute, useValue: new ActivatedRoute() },
          {
            provide: CoursesService,
            useValue: new FakeCoursesService(null)
          },
          { provide: DatePipe, useValue: new DatePipe('ru') },
          { provide: Router, useValue: mockRouter }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
