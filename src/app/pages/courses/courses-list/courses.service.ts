import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';
import { SearchableItemDto } from '../../../shared-components/searchable-item/searchable-item';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class CoursesService {
  private static coursesCollection: CourseItem[] = [
    new CourseItem({
      id: 1,
      title: 'AngularJS',
      date: new Date(2019, 1, 1),
      duration: 98,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 2,
      title: 'Angular 2',
      date: new Date(2018, 1, 1),
      duration: 44,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 3,
      title: 'KnockoutJS',
      date: new Date(2018, 1, 1),
      duration: 125,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: false
    }),
    new CourseItem({
      id: 4,
      title: 'Backbone',
      date: new Date(2017, 11, 18),
      duration: 240,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 6,
      title: 'Marionette',
      date: new Date(2017, 1, 1),
      duration: 23,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: false
    }),
    new CourseItem({
      id: 5,
      title: 'React',
      date: new Date(2017, 11, 14),
      duration: 777,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    })
  ];

  public courses: Observable<CourseItem[]>;
  private _courses: BehaviorSubject<CourseItem[]>;

  constructor() {
    this._courses = <BehaviorSubject<CourseItem[]>>new BehaviorSubject([]);
    this.courses = this._courses.asObservable();
  }

  public LoadCourses() {
    this._courses.next(Object.assign({}, CoursesService).coursesCollection);
  }

  public CreateCourse(course: SearchableItemDto) {
    CoursesService.coursesCollection.push(course);
    this._courses.next(Object.assign({}, CoursesService).coursesCollection);
  }

  public GetCourse(id: number): Observable<CourseItem> {
    return Observable.from(
      CoursesService.coursesCollection.filter(course => course.id === id)
    );
  }

  public UpdateCourse(course: CourseItem) {
    CoursesService.coursesCollection.forEach((c, i) => {
      if (c.id === c.id) {
        CoursesService.coursesCollection[i] = c;
      }
    });

    this._courses.next(Object.assign({}, CoursesService).coursesCollection);
  }

  public RemoveItem(id: number) {
    CoursesService.coursesCollection.forEach((c, i) => {
      if (c.id === id) {
        CoursesService.coursesCollection.splice(i, 1);
      }
    });

    this._courses.next(Object.assign({}, CoursesService).coursesCollection);
  }

  public GetCoursesCount(): number {
    return this._courses.getValue().length;
  }
}
