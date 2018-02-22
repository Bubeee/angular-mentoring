import * as CourseActions from './course.actions';
import { Course } from '../courses.service/course-item';

export type Action = CourseActions.All;

export interface CourseListState {
  courses: Course[];
  coursesLoaded: number;
  query: string;
}

export const defaultState: CourseListState = {
  courses: [],
  coursesLoaded: 3,
  query: ''
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const CourseReducer = (state: CourseListState = defaultState, action) => {
  switch (action.type) {
    case CourseActions.LOAD_COURSES_SUCCESS: {
      debugger;
      return newState(state, { courses: action.payload });
    }
    case CourseActions.ADD_COURSE_SUCCESS: {
      return newState(state, { courses: action.payload });
    }
    case CourseActions.DELETE_COURSE_SUCCESS: {
      return newState(state, { courses: action.payload });
    }
    case CourseActions.CLEAR_STATE:
      return newState(state, { ...defaultState });
    default: {
      return state;
    }
  }
};
