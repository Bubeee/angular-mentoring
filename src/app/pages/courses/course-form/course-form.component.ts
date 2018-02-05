import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Course } from '../course-item';
import { createDateDimeValidator } from '../../../shared-components/validators/date-format.vaidator';
import * as moment from 'moment';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input() courseModel: Course;
  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: ['', [Validators.required]]
    });

    this.courseForm.setValue({
      title: this.courseModel.title,
      description: this.courseModel.description,
      date: this.courseModel.date,
      duration: this.courseModel.duration,
      authors: this.courseModel.authors
    });
  }

  cancel() {}

  onSubmit({ value, valid }: { value: Course; valid: boolean }) {
    console.log(value, valid);
  }
}
