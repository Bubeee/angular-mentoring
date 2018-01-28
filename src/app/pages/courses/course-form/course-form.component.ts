import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Course } from '../../pages/courses/course-item';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.course = this.formBuilder.group({
      title: this.formBuilder.control({}),
      description: this.formBuilder.control({}),
      date: this.formBuilder.control({}),
      duration: this.formBuilder.control({}),
      authors: this.formBuilder.control({})
    });
  }

  save() {}

  cancel() {}

  onSubmit(course: Course) {}
}
