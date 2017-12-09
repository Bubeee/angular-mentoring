import { Injectable } from '@angular/core';
import { CourseItem } from './course-item';
import { SearchableItemDto } from '../../shared-components/searchable-item/searchable-item';

@Injectable()
export class CoursesService {
  private static coursesCollection: CourseItem[] = [
    new CourseItem({
      id: 1,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    }),
    new CourseItem({
      id: 2,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    }),
    new CourseItem({
      id: 3,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    }),
    new CourseItem({
      id: 4,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    }),
    new CourseItem({
      id: 6,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    }),
    new CourseItem({
      id: 5,
      title: 'AngularJS',
      creationDate: new Date(),
      additionalInfo: '98 min',
      description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
    })
  ];

  constructor() {}

  public GetCourseList(): CourseItem[] {
    return CoursesService.coursesCollection;
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
}
