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
export class CoursesComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit {

  courseList: CourseItem[];

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  constructor() {
    this.courseList = [];
  }

  onDelete(id: number) {
    console.log(`deleted id is: ${id}`);
    this.courseList = this.courseList.filter(item => item.id !== id);
  }

  ngOnInit() {
    console.log('ngOnInit');

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
}
