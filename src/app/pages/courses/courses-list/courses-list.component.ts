import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchPipe } from '../../../common/pipes/search.pipe';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import {
  ISearchableItemDto,
  SearchableItem
} from '../../../shared-components/searchable-item/searchable-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import { Course } from '../courses.service/course-item';
import { CoursesService } from '../courses.service/courses.service';
import { Store } from '@ngrx/store';
import * as CourseActions from '../store/course.actions';
import { CourseListState } from '../store/course.reducer';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesService]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: Observable<Course[]>;
  itemTitle = 'Course';

  constructor(
    private _courseService: CoursesService,
    private _searchPipe: SearchPipe,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.courses = this.store.select(state => state.CourseList.courses);

    this.store.dispatch(new CourseActions.ClearState());
    this.store.dispatch(new CourseActions.LoadCourses());
  }

  ngOnDestroy(): void {
    this.store.dispatch(new CourseActions.ClearState());
  }

  onDelete(id: number) {
    this.store.dispatch(new CourseActions.DeleteCourse(id));
  }

  onEdit(id: number) {
    this.router.navigate(['./courses', id]);
  }

  onAdd() {
    this.router.navigate(['./add-course']);
  }

  onSearch(searchString: string) {
    this.store.dispatch(new CourseActions.UpdateSearchQuery(searchString));
    this.store.dispatch(new CourseActions.LoadCourses());
  }

  loadMore() {
    this.store.dispatch(new CourseActions.UpdateSearchQuery(''));
    this.store.dispatch(new CourseActions.UpdateCoursesToLoadCount(3));
    this.store.dispatch(new CourseActions.LoadCourses());
  }

  hasNoCourses(): boolean {
    return true;
  }
}
