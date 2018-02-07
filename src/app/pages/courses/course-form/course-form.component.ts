import {
  Component,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
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

  @Output() onSubmit = new EventEmitter<Course>();

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

  submit() {
    console.log(this.courseForm.controls);
    if (this.courseForm.valid) {
      this.onSubmit.emit(this.courseModel);
    } else {
      this.validateAllFields(this.courseForm);
    }
  }

  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
}
