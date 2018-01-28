import { Component, OnInit } from '@angular/core';
import {
  SearchableItem,
  SearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../course-item';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: SearchableItem;
  courseId: number;

  addCourseForm: FormGroup;

  constructor(
    private router: Router,
    route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.courseId = route.snapshot.params['id'];
  }

  ngOnInit() {
    const dto = new SearchableItemDto();
    dto.duration = 30;
    dto.date = new Date();

    this.course = new Course(dto);

    this.addCourseForm = this.formBuilder.group({
      title: this.formBuilder.control({}),
      description: this.formBuilder.control({}),
      date: this.formBuilder.control({}),
      duration: this.formBuilder.control({}),
      authors: this.formBuilder.control({}),
    });
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
