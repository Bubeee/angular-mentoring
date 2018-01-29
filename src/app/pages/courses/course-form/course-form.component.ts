import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../course-item';
import { validateDateFormat } from '../../../shared-components/validators/date-format.vaidator';

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
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, validateDateFormat]],
      duration: ['', [Validators.required]],
      authors: ['', [Validators.required]]
    });
  }

  cancel() {}

  onSubmit({ value, valid }: { value: Course; valid: boolean }) {
    console.log(value, valid);
  }
}
