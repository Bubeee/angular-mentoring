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
import { Course, CourseDto } from '../course-item';
import { createDateDimeValidator } from '../../../shared-components/validators/date-format.vaidator';
import * as moment from 'moment';
import { AuthorDto, Author } from '../author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input() courseModel: Course;
  @Input() authors: Observable<Author[]>;
  public courseForm: FormGroup;

  @Output() onSubmit = new EventEmitter<Course>();
  @Output() onCancel = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      authors: [[]]
    });

    this.setValuesToTheForm(this.courseModel);
  }

  cancel() {
    this.onCancel.emit();
  }

  submit() {
    if (this.courseForm.valid) {
      // this.onSubmit.emit(this.courseModel);
    } else {
      this.validateAllFields(this.courseForm);
    }
  }

  private setValuesToTheForm(course: Course) {
    this.courseForm.controls['title'].patchValue(course.title);
    if (course.date) {
      this.courseForm.controls['date'].patchValue(
        moment(course.date).format('dd/MM/yyyy')
      );
    }

    this.courseForm.controls['description'].patchValue(course.description);
    this.courseForm.controls['duration'].patchValue(course.duration);

    this.authors.subscribe(authors =>
      this.courseForm.controls['authors'].patchValue(this.authors)
    );
  }

  prepareSaveCourse(courseForm: FormGroup): CourseDto {
    const formModel = courseForm.value;

    const course: CourseDto = new CourseDto();
    course.name = formModel.title;
    course.date = new Date(formModel.date);
    course.description = formModel.description;
    course.length = formModel.duration;
    course.isTopRated = formModel.topRated;
    course.authors = [];

    for (const author of formModel.authors) {
      if (author.checked) {
        const authorDto = new AuthorDto();
        authorDto.id = author.id;
        course.authors.push(authorDto);
      }
    }

    return course;
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
