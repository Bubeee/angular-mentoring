import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-item';
import { CoursesService } from './courses.service';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  private courseList: CourseItem[];
  private initialCourseList: CourseItem[];
  itemTitle = 'Course';

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses() {
    this._courseService
      .GetCourses()
      .subscribe(courses => this.courseList = this.initialCourseList = courses);
  }

  constructor(private _courseService: CoursesService, private _searchPipe: SearchPipe) {}

  onDelete(id: number) {
    console.log(`deleted id is: ${id}`);
    this._courseService.RemoveItem(id);
  }

  onSearch(searchString: string) {
    this.courseList = this._searchPipe.transform(this.initialCourseList, searchString);
  }

  hasNoCourses(): boolean {
    return this.courseList.length === 0;
  }
}
