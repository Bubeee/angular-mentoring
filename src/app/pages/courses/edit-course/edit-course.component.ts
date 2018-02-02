import { Component, OnInit, Input } from '@angular/core';
import {
  SearchableItem,
  SearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Course, CourseDto } from '../course-item';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: SearchableItem;
  courseId: number;

  constructor(private router: Router, route: ActivatedRoute, http: CoursesService) {
    this.courseId = route.snapshot.params['id'];
  }

  ngOnInit() {

    // TODO: Fetch course from service
    const dto = new CourseDto();
    dto.length = 30;
    dto.date = new Date();

    this.course = new Course(dto);
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
