import { TestBed, inject, async } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import {
  HttpModule,
  XHRBackend,
  Http,
  ResponseOptions,
  Response
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Course, CourseDto } from './course-item';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const makeCourses = () =>
  Observable.of([
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' }
  ] as CourseDto[]);

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        CoursesService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it(
    'should be created',
    inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();
      expect(service instanceof CoursesService).toBe(true);
    })
  );

  it(
    'can instantiate service with "new"',
    inject([Http], (http: Http) => {
      expect(http).not.toBeNull('http should be provided');
      const service = new CoursesService(http);
      expect(service instanceof CoursesService).toBe(
        true,
        'new service should be ok'
      );
    })
  );

  it(
    'can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
    })
  );

  describe('when SearchCourses', () => {
    let backend: MockBackend;
    let service: CoursesService;
    let fakeData: Observable<CourseDto[]>;
    let response: Response;

    beforeEach(
      inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
        backend = be;
        service = new CoursesService(http);
        fakeData = makeCourses();
        const options = new ResponseOptions({
          status: 200,
          body: { data: fakeData }
        });
        response = new Response(options);
      })
    );

    it(
      'should have expected fake courses (then)',
      async(
        inject([], () => {
          backend.connections.subscribe((c: MockConnection) =>
            c.mockRespond(response)
          );

          service
            .SearchCourses('')
            .toPromise()
            // .then(() => Promise.reject('deliberate'))
            .then(courses => {
              fakeData.subscribe(fakeCourses =>
                expect(courses.length).toBe(fakeCourses.length)
              );
            });
        })
      )
    );
  });
});
