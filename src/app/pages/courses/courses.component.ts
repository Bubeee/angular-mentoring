import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-item';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: CourseItem[];

  constructor() {
    this.courseList = [
      new CourseItem(1, 'Angular', new Date(), '98 min', 'Lorem, ipsumsd bla'),
      new CourseItem(2, 'Angular', new Date(), '123 min', 'Lorem, ipsumsd bla'),
      new CourseItem(3, 'Angular', new Date(), '324 min', 'Lorem, ipsumsd bla'),
      new CourseItem(4, 'Angular', new Date(), '19 min', 'Lorem, ipsumsd bla')
    ];
  }

  ngOnInit() {}
}
