import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-item';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  private courseService: CoursesService;
  private courseList: CourseItem[];

  ngOnInit(): void {
    this.courseList = this.courseService.GetCourseList();
  }
  constructor(courseService: CoursesService) {
    this.courseService = courseService;
  }

  onDelete(id: number) {
    console.log(`deleted id is: ${id}`);
    // this.courseList = this.courseList.filter(item => item.id !== id);
  }
}
