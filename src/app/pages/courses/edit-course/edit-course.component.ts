import { Component, OnInit, Input } from '@angular/core';
import {
  SearchableItem,
  ISearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Course, CourseDto } from '../course-item';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Observable } from 'rxjs/Observable';
import { AuthorsService } from '../authors.service';
import { Author } from '../author';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course: Course;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _coursesService: CoursesService,
    private _authorsService: AuthorsService
  ) {}

  ngOnInit() {
    const courseId = this._route.snapshot.params['id'];
    this.course = new Course({
      id: 0,
      name: '',
      description: '',
      date: null,
      isTopRated: false,
      length: 35,
      authors: [],
    });

    this._coursesService.GetCourse(courseId).subscribe(c => {
      this.course = Object.assign({}, this.course, c);
    });

    this._authorsService.getAuthors().subscribe(
      authors => {
        authors.forEach(author => {
          const authorIndex = this.course.authors.findIndex(
            a => a.id === author.id
          );
          if (authorIndex > -1) {
            this.course.authors[authorIndex].checked = true;
          } else {
            this.course.authors.push(author);
          }
        });
      },
      error => console.log(error)
    );
  }

  save(course: CourseDto) {
    this._coursesService
      .UpdateCourse(course)
      .subscribe(
        savedCourse => this._router.navigate(['courses']),
        error => console.log(error)
      );
  }

  cancel() {
    this._router.navigate(['courses']);
  }
}
