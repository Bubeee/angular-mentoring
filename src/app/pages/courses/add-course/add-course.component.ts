import { Component, OnInit } from '@angular/core';
import {
  SearchableItem,
  ISearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Course, ICourseDto } from '../course-item';
import * as moment from 'moment';
import { CoursesService } from '../courses.service';
import { AuthorsService } from '../authors.service';
import { Author } from '../author';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public course: Course;

  constructor(
    private router: Router,
    private coursesService: CoursesService,
    private authorsService: AuthorsService
  ) {}

  ngOnInit() {
    this.course = new Course({
      id: 0,
      name: '',
      description: '',
      date: null,
      isTopRated: false,
      length: 35,
      authors: []
    });

    this.authorsService.getAuthors().subscribe(
      authors => {
        this.course = Object.assign({}, this.course, {
          authors: authors.map(a => new Author(a))
        });
      },
      error => console.log(error)
    );
  }

  save(course: Course) {
    this.coursesService
      .CreateCourse(course)
      .subscribe(
        savedCourse => this.router.navigate(['courses']),
        error => console.log(error)
      );
  }

  cancel() {
    this.router.navigate(['courses']);
  }
}
