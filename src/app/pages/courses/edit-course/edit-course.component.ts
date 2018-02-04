import { Component, OnInit, Input } from '@angular/core';
import {
  SearchableItem,
  ISearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Course, ICourseDto } from '../course-item';
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
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
