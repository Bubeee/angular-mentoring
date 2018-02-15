import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthorDto } from '../author';
import { AuthorsService } from '../authors.service';
import { CoursesService } from '../courses.service';
import { createDateDimeValidator } from '../../../shared-components/validators/date-format.vaidator';
import { createNumberValidator } from '../../../shared-components/validators/number.vaidator';
import { createPickerValidator } from '../../../shared-components/controls/picker/picker.validator';
import { ISelectableItem } from '../../../shared-components/controls/picker/selectable-item';
import { CourseDto, Course } from '../course-item';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  public courseForm: FormGroup;
  private courseAuthors: AuthorDto[];
  private editMode = false;
  private courseId = false;

  private routeSubscription: Subscription;
  private courseSubscription: Subscription;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService,
    private router: ActivatedRoute,
    private courseService: CoursesService,
    private datePipe: DatePipe,
    private navigateRouter: Router
  ) {}

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.maxLength(50), Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, createDateDimeValidator('DD/MM/YYYY')]],
      duration: ['', [Validators.required, createNumberValidator()]],
      topRated: false,
      authors: [[], [createPickerValidator()]],
    });

    const id = +this.router.snapshot.paramMap.get('id');
    this.editMode = id && id > 0;

    if (this.editMode) {
      this.routeSubscription = this.router.params.subscribe(data => {
        const courseId = +data['id'];
        this.courseSubscription = this.courseService
          .GetCourse(courseId)
          .subscribe(
            course => {
              this.setValuesToTheForm(course);
              this.courseAuthors = course.authors;

              this.authorsService.getAuthors().subscribe(authors => {
                this.markCheckedAuthors(authors);
                this.courseForm.controls['authors'].setValue(authors);
              });
            },
            error => {
              if (error.status === 404) {
                this.navigateRouter.navigate(['notfound']);
              }
            }
          );
      });
    } else {
      this.authorsService
        .getAuthors()
        .subscribe(authors =>
          this.courseForm.controls['authors'].setValue(authors)
        );
    }
  }

  ngOnDestroy(): void {
    if (this.editMode) {
      this.courseSubscription.unsubscribe();
      this.routeSubscription.unsubscribe();
    }
  }

  private setValuesToTheForm(course: Course) {
    this.courseForm.controls['title'].patchValue(course.title);
    this.courseForm.controls['date'].patchValue(
      this.datePipe.transform(course.date, 'dd/MM/yyyy')
    );
    this.courseForm.controls['description'].patchValue(course.description);
    this.courseForm.controls['duration'].patchValue(course.duration);
    this.courseForm.controls['topRated'].patchValue(course.topRated);
  }

  private markCheckedAuthors(authors: ISelectableItem[]) {
    for (const author of authors) {
      const isExist = this.courseAuthors.some(auth => auth.id === author.value);
      if (isExist) {
        author.checked = true;
      }
    }
    return authors;
  }

  onSubmit(courseForm: FormGroup): void {
    const courseDto = this.prepareSaveCourse(courseForm);
    if (this.editMode) {
      courseDto.id = +this.router.snapshot.paramMap.get('id');
      this.courseService.UpdateCourse(courseDto).subscribe(_ => {
        this.redirectAction();
      });
    } else {
      this.courseService.CreateCourse(courseDto).subscribe(_ => {
        this.redirectAction();
      });
    }
  }
  private redirectAction() {
    this.courseForm.reset();
    this.navigateRouter.navigate(['courses']);
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
      if (author.isSelected) {
        const authorDto = new AuthorDto();
        authorDto.id = author.id;
        course.authors.push(authorDto);
      }
    }

    return course;
  }
}
