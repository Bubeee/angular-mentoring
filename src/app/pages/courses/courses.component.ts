import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  SimpleChanges
} from '@angular/core';
import { CourseItem } from './course-item';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList: CourseItem[];

  constructor() {
    this.courseList = [];
  }

  onDelete(id: number) {
    console.log(`deleted id is: ${id}`);
    this.courseList = this.courseList.filter(item => item.id !== id);
  }

  ngOnInit() {
    this.courseList = [
      new CourseItem({
        id: 1,
        title: 'AngularJS',
        creationDate: new Date(),
        additionalInfo: '98 min',
        description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      }),
      new CourseItem({
        id: 2,
        title: 'AngularJS',
        creationDate: new Date(),
        additionalInfo: '98 min',
        description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      }),
      new CourseItem({
        id: 3,
        title: 'AngularJS',
        creationDate: new Date(),
        additionalInfo: '98 min',
        description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      }),
      new CourseItem({
        id: 4,
        title: 'AngularJS',
        creationDate: new Date(),
        additionalInfo: '98 min',
        description: 'Lorem, ipsumsd bla Lorem, ipsumsd bla Lorem, ipsumsd bla'
      }),
    ];
  }
}
