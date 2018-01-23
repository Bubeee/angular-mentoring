import { Injectable } from '@angular/core';
import { Course } from './course-item';
import { SearchableItemDto } from '../../shared-components/searchable-item/searchable-item';
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
import { environment } from '../../../environments/environment';

class CourseDto {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  length: number;
}

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
          const searchableItem = new SearchableItemDto();
          searchableItem.date = item.date;
          searchableItem.description = item.description;
          searchableItem.duration = item.length;
          searchableItem.id = item.id;
          searchableItem.title = item.name;
          searchableItem.topRated = item.isTopRated;

          return new Course(searchableItem);
        })
      );
  }

  public CreateCourse(course: SearchableItemDto) {

  }

  public RemoveItem(id: number) {}
}
