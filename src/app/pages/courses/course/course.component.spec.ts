import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationPipe } from '../../../common/pipes/duration.pipe';
import { AuthorsService } from '../authors.service/authors.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from '../courses.service/courses.service';
import { DatePipe } from '@angular/common';
import 'rxjs/add/observable/of';

import {
  HttpModule,
  Http,
  BaseRequestOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { AuthorDto } from '../authors.service/author';

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

  const fakeCoursesService = {};
  const fakeAuthorsService = {
    getAuthors: _ =>
      Observable.of([
        new AuthorDto(1, 'Voada', 'asdasda'),
        new AuthorDto(2, 'asdasd', 'asdasdad')
      ])
  };

  const MockActivatedRoute = {
    params: {
      subscribe: jasmine
        .createSpy('subscribe')
        .and.returnValue(Observable.of(<Params>{ id: 1 }))
    },
    snapshot: {
      paramMap: {
        get: str => null
      }
    }
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CourseComponent, DurationPipe],
        imports: [ReactiveFormsModule, FormsModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          FormBuilder,
          {
            provide: AuthorsService,
            useValue: fakeAuthorsService
          },
          {
            provide: ActivatedRoute,
            useValue: MockActivatedRoute
          },
          {
            provide: CoursesService,
            useValue: fakeCoursesService
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

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('form invalid when empty', () => {
  //   expect(component.courseForm.valid).toBeFalsy();
  // });
});
