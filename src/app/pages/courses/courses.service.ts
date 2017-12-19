import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';
import { SearchableItemDto } from '../../shared-components/searchable-item/searchable-item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CoursesService {
  private static coursesCollection: CourseItem[] = [
    new CourseItem({
      id: 1,
      title: 'AngularJS',
      creationDate: new Date(2019, 1, 1),
      additionalInfo: 98,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 2,
      title: 'AngularJS',
      creationDate: new Date(2018, 1, 1),
      additionalInfo: 44,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 3,
      title: 'AngularJS',
      creationDate: new Date(2018, 1, 1),
      additionalInfo: 125,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: false
    }),
    new CourseItem({
      id: 4,
      title: 'AngularJS',
      creationDate: new Date(2017, 11, 18),
      additionalInfo: 240,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    }),
    new CourseItem({
      id: 6,
      title: 'AngularJS',
      creationDate: new Date(2017, 1, 1),
      additionalInfo: 23,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: false
    }),
    new CourseItem({
      id: 5,
      title: 'AngularJS',
      creationDate: new Date(2017, 11, 14),
      additionalInfo: 777,
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla',
      topRated: true
    })
  ];

  constructor() {
    //  CoursesService.coursesCollection = [];
  }

  public GetCourses(): Observable<CourseItem[]> {
    return of(CoursesService.coursesCollection);
  }

  public CreateCourse(searchableItem: SearchableItemDto): CourseItem {
    return new CourseItem(searchableItem);
  }

  public GetCourse(id: number) {
    return CoursesService.coursesCollection.filter(course => course.id === id);
  }

  public UpdateCourse(id: number, courseItem: CourseItem): CourseItem {
    const updatingCourse = CoursesService.coursesCollection.find(
      course => course.id === id
    );

    updatingCourse.additionalInfo = courseItem.additionalInfo;
    updatingCourse.creationDate = courseItem.creationDate;
    updatingCourse.description = courseItem.description;
    updatingCourse.title = courseItem.title;

    return updatingCourse;
  }

  public RemoveItem(id: number) {
    const removingIndex = CoursesService.coursesCollection.findIndex(
      course => course.id === id
    );

    CoursesService.coursesCollection.splice(removingIndex, 1);
  }
}
