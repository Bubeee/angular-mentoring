import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from './course-item';
import { CoursesService } from './courses.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import {
  SearchableItemDto,
  SearchableItem
} from '../../shared-components/searchable-item/searchable-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit, OnDestroy {
  private courseList: Observable<CourseItem[]>;
  public filteredCourseList: Observable<CourseItem[]>;

  private courseListSubscribtions: ISubscription[] = new Array<ISubscription>();

  itemTitle = 'Course';

  ngOnInit(): void {
    this.courseList = this.filteredCourseList = this._courseService.courses.map(
      courses =>
        courses.filter(course => {
          const twoWeeksBefore = new Date();
          twoWeeksBefore.setDate(twoWeeksBefore.getDate() - 14);
          if (course.date >= twoWeeksBefore) {
            return true;
          }

          return false;
        })
    );
    this._courseService.LoadCourses();
  }

  ngOnDestroy(): void {}

  constructor(
    private _courseService: CoursesService,
    private _searchPipe: SearchPipe,
    private router: Router
  ) {}

  onDelete(id: number) {
    this._courseService.RemoveItem(id);
  }

  onEdit(id: number) {
    this.router.navigate(['./edit-course', id]);
  }

  onSearch(searchString: string) {
    this.filteredCourseList = this.courseList.map(courses => {
      return this._searchPipe.transform(courses, searchString);
    });
  }

  hasNoCourses(): boolean {
    return this._courseService.GetCoursesCount() === 0;
  }
}
