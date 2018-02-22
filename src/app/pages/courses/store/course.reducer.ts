import * as CourseActions from './course.actions';
import { Course } from '../courses.service/course-item';

export interface CourseListState {
  courses: Course[];
  coursesLoaded: number;
  query: string;
}

export type Action = CourseActions.All;

export const defaultState: CourseListState = {
  courses: [],
  coursesLoaded: 3,
  query: ''
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const CourseReducer = (state: Course[] = [], action) => {
  switch (action.type) {
    case CourseActions.LOAD_COURSES_SUCCESS: {
      return newState(state, { courses: action.payload, coursesLoaded: action.payload.lenght });
    }
    case CourseActions.ADD_COURSE_SUCCESS: {
      return newState(state, { courses: action.payload });
    }
    case CourseActions.DELETE_COURSE_SUCCESS: {
      return newState(state, { courses: action.payload });
    }
    default: {
      return state;
    }
  }
};
