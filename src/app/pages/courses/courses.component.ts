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
      new CourseItem(
        1,
        'AngularJS',
        new Date(),
        '98 min',
        'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      ),
      new CourseItem(
        2,
        'Video course',
        new Date(),
        '123 min',
        'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      ),
      new CourseItem(
        3,
        'Long course name macintosh macintosh macintosh macintosh macintosh windows alala',
        new Date(),
        '324 min',
        'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsuas dasdas dasd asdasd asmsd ipsumsd bla Lorem, ipsumsd bla Lorem, ipsuas dasdas dasd asdasd as ipsumsd bla Lorem, ipsumsd bla Lorem, ipsuas dasdas dasd asdasd as ipsumsd bla Lorem, ipsumsd bla Lorem, ipsuas dasdas dasd asdasd as bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      ),
      new CourseItem(4, 'Angular 2', new Date(), '19 min', 'Lorem, ipsumsd bla')
    ];
  }

  onDelete(id: number) {
    this.courseList = this.courseList.filter(item => item.id !== id);
  }

  ngOnInit() {}
}
