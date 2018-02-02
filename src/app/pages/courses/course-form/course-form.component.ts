import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NG_VALIDATORS
} from '@angular/forms';
import { Course } from '../course-item';
import { createDateDimeValidator } from '../../../shared-components/validators/date-format.vaidator';

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
      duration: [30, [Validators.required]],
      authors: ['', [Validators.required]]
    });

    this.courseForm.setValue(this.courseModel);
  }

  cancel() {}

  onSubmit({ value, valid }: { value: Course; valid: boolean }) {
    console.log(value, valid);
  }
}
