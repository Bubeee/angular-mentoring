import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-item';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  private courseList: CourseItem[];
  itemTitle = 'Course';

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses() {
    this._courseService
      .GetCourses()
      .subscribe(courses => this.courseList = courses);
  }

  constructor(private _courseService: CoursesService) {}

  onDelete(id: number) {
    console.log(`deleted id is: ${id}`);
    this._courseService.RemoveItem(id);
  }

  hasNoCourses(): boolean {
    return this.courseList.length === 0;
  }
}
