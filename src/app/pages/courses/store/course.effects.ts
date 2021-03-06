import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Actions, Effect } from '@ngrx/effects';
import { CoursesService } from '../courses.service/courses.service';

import * as CourseActions from './course.actions';
import { Store } from '@ngrx/store';
import {
  withLatestFrom,
  mergeMap,
  catchError,
  switchMap,
  map
} from 'rxjs/operators';
import { CourseListState } from './course.reducer';
import { of } from 'rxjs/observable/of';
import { query } from '@angular/core/src/animation/dsl';

export type Action = CourseActions.All;

@Injectable()
export class CourseEffects {
  constructor(
    private actions: Actions,
    private coursesService: CoursesService,
    private store: Store<any>
  ) {}

  @Effect()
  loadCourses$: Observable<Action> = this.actions
    .ofType(CourseActions.LOAD_COURSES)
    .pipe(
      withLatestFrom(this.store.select(state => state.CourseList.query)),
      withLatestFrom(
        this.store.select(state => state.CourseList.coursesLoaded)
      ),
      mergeMap(([[action, q], coursesLoaded]) => {
        return this.coursesService.SearchCourses(q, 0, coursesLoaded);
      })
    )
    .map((courses: any) => {
      return new CourseActions.LoadCoursesSuccess(courses);
    });

  @Effect()
  loadCourse$: Observable<Action> = this.actions
    .ofType(CourseActions.LOAD_COURSE)
    .switchMap((action: CourseActions.LoadCourse) => {
      return this.coursesService.GetCourse(action.courseId);
    })
    .map((course: any) => {
      return new CourseActions.LoadCourseSuccess(course);
    });

  @Effect()
  addCourse$ = this.actions
    .ofType(CourseActions.ADD_COURSE)
    .map((action: CourseActions.AddCourse) => action.payload)
    .switchMap(course => this.coursesService.CreateCourse(course))
    .map(course => new CourseActions.AddCourseSuccess(course));

  @Effect()
  editCourse$ = this.actions
    .ofType(CourseActions.EDIT_COURSE)
    .map((action: CourseActions.EditCourse) => action.payload)
    .switchMap(course => this.coursesService.UpdateCourse(course))
    .map(course => new CourseActions.EditCourseSuccess(course));

  @Effect()
  deleteCourse$ = this.actions
    .ofType(CourseActions.DELETE_COURSE)
    .map((action: CourseActions.DeleteCourse) => action.courseId)
    .switchMap(courseId => this.coursesService.RemoveCourse(courseId))
    .map(id => new CourseActions.DeleteCourseSuccess());

  @Effect()
  deleteCourseSuccess$: Observable<Action> = this.actions
    .ofType(CourseActions.DELETE_COURSE_SUCCESS)
    .pipe(map(_ => new CourseActions.LoadCourses()));
}
