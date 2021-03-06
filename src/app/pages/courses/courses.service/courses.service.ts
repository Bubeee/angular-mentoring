import { Injectable } from '@angular/core';
import { Course, CourseDto } from './course-item';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/from';
import {
  Http,
  Request,
  Response,
  RequestOptions,
  RequestMethod,
  URLSearchParams
} from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CoursesService {
  constructor(private _http: Http) {}

  public SearchCourses(
    query: string,
    skip: number = 0,
    take: number = 15
  ): Observable<Course[]> {
    const requestOptions = new RequestOptions();
    const urlParams: URLSearchParams = new URLSearchParams();
    let request: Request;

    urlParams.set('start', skip.toString());
    urlParams.set('count', take.toString());
    urlParams.set('query', query);

    requestOptions.url = `${environment.apiEndpoints.api}/courses`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.params = urlParams;

    request = new Request(requestOptions);

    return this._http
      .request(request)
      .map((response: Response) => response.json())
      .map(courses =>
        courses.map((item: CourseDto) => {
          const dto = {
            id: item.id,
            name: item.name,
            description: item.description,
            date: item.date,
            isTopRated: item.isTopRated,
            length: item.length,
            authors: item.authors,
            selectedAuthors: item.authors,
          };

          return new Course(dto);
        })
      );
  }

  public CreateCourse(course: CourseDto) {
    const requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${environment.apiEndpoints.api}/courses`;
    requestOptions.method = RequestMethod.Post;
    requestOptions.body = course;

    request = new Request(requestOptions);

    return this._http
      .request(request)
      .map((response: Response) => response.json())
      .map((c: CourseDto) => new Course(c));
  }

  public UpdateCourse(course: CourseDto) {
    const requestOptions = new RequestOptions();
    let request: Request;

    requestOptions.url = `${environment.apiEndpoints.api}/courses/${course.id}`;
    requestOptions.method = RequestMethod.Put;
    requestOptions.body = course;

    request = new Request(requestOptions);

    return this._http
      .request(request)
      .map((response: Response) => response.json())
      .map((c: CourseDto) => new Course(c));
  }

  public RemoveCourse(id: number) {
    const requestOptions = new RequestOptions();
    const urlParams: URLSearchParams = new URLSearchParams();
    let request: Request;

    requestOptions.url = `${environment.apiEndpoints.api}/courses/${id}`;
    requestOptions.method = RequestMethod.Delete;
    requestOptions.params = urlParams;

    request = new Request(requestOptions);

    return this._http
      .request(request)
      .map((response: Response) => response.json());
  }

  public GetCourse(id: number): Observable<Course> {
    const requestOptions = new RequestOptions();
    const urlParams: URLSearchParams = new URLSearchParams();
    let request: Request;

    requestOptions.url = `${environment.apiEndpoints.api}/courses/${id}`;
    requestOptions.method = RequestMethod.Get;
    requestOptions.params = urlParams;

    request = new Request(requestOptions);
    return this._http
      .request(request)
      .map((response: Response) => response.json())
      .map((course: CourseDto) => new Course(course));
  }
}
