import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../course-item';
import { CoursesService } from '../courses.service';
import { SearchPipe } from '../../../common/pipes/search.pipe';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import {
  SearchableItemDto,
  SearchableItem
} from '../../../shared-components/searchable-item/searchable-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  providers: [CoursesService]
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public courses: Observable<Course[]>;
  private coursesLoaded = 3;
  itemTitle = 'Course';

  ngOnInit(): void {
    this.courses = this._courseService.SearchCourses('', 0, this.coursesLoaded);
  }

  ngOnDestroy(): void {}

  constructor(
    private _courseService: CoursesService,
    private _searchPipe: SearchPipe,
    private router: Router
  ) {}

  onDelete(id: number) {
    this.courses = this._courseService.RemoveItem(id);
  }

  onEdit(id: number) {
    this.router.navigate(['./edit-course', id]);
  }

  onAdd() {
    this.router.navigate(['./add-course']);
  }

  onSearch(searchString: string) {
    this.courses = this._courseService.SearchCourses(searchString, 0, this.coursesLoaded);
  }

  load() {
    this.coursesLoaded += 3;
    this.courses = this._courseService.SearchCourses('', 0, this.coursesLoaded);
  }

  hasNoCourses(): boolean {
    return true;
  }
}
