import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const LOAD_COURSES = '[Courses] LOAD_COURSES';
export const LOAD_COURSES_SUCCESS = '[Courses] LOAD_COURSES_SUCCESS';

export const LOAD_COURSE = '[Course] LOAD_COURSE';
export const LOAD_COURSE_SUCCESS = '[Course] LOAD_COURSE_SUCCESS';

export const ADD_COURSE = '[Course] ADD_COURSE';
export const ADD_COURSE_SUCCESS = '[Course] ADD_COURSE_SUCCESS';

export const EDIT_COURSE = '[Course] EDIT_COURSE';
export const EDIT_COURSE_SUCCESS = '[Course] EDIT_COURSE_SUCCESS';

export const DELETE_COURSE = '[Course] DELETE_COURSE';
export const DELETE_COURSE_SUCCESS = '[Course] DELETE_COURSE_SUCCESS';

export const LOAD_MORE_COURSES = '[Courses] LOAD_MORE_COURSES';
export const UPDATE_SEARCH_QUERY = '[Courses] UPDATE_SEARCH_QUERY';

export const CLEAR_STATE = '[Courses] CLEAR_STATE';

export class LoadCourses implements Action {
  readonly type = LOAD_COURSES;

  constructor() {}
}

export class LoadCoursesSuccess implements Action {
  readonly type = LOAD_COURSES_SUCCESS;

  constructor(public payload?) {}
}

export class LoadCourse implements Action {
  readonly type = LOAD_COURSE;

  constructor(public courseId) {}
}

export class LoadCourseSuccess implements Action {
  readonly type = LOAD_COURSES_SUCCESS;

  constructor(public payload?) {}
}

export class AddCourse implements Action {
  readonly type = ADD_COURSE;

  constructor(public payload?) {}
}

export class AddCourseSuccess implements Action {
  readonly type = ADD_COURSE_SUCCESS;

  constructor(public payload?) {}
}

export class EditCourse implements Action {
  readonly type = EDIT_COURSE;

  constructor(public payload?) {}
}

export class EditCourseSuccess implements Action {
  readonly type = EDIT_COURSE_SUCCESS;

  constructor(public payload?) {}
}

export class DeleteCourse implements Action {
  readonly type = DELETE_COURSE;

  constructor(public courseId) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = DELETE_COURSE_SUCCESS;

  constructor(public payload?) {}
}

export class ClearState implements Action {
  readonly type = CLEAR_STATE;

  constructor() { }
}

export type All =
    LoadCourses
  | LoadCoursesSuccess
  | LoadCourse
  | LoadCourseSuccess
  | EditCourse
  | EditCourseSuccess
  | DeleteCourse
  | DeleteCourseSuccess
  | AddCourse
  | AddCourseSuccess
  | ClearState;
