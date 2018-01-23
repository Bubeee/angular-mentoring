import { Component, OnInit, Input } from '@angular/core';
import {
  SearchableItem,
  SearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Course } from '../course-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: SearchableItem;
  courseId: number;

  constructor(private router: Router, route: ActivatedRoute) {
    this.courseId = route.snapshot.params['id'];
  }

  ngOnInit() {
    const dto = new SearchableItemDto();
    dto.duration = 30;
    dto.date = new Date();

    this.course = new Course(dto);
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
