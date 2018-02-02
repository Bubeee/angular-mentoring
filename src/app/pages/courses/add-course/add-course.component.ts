import { Component, OnInit } from '@angular/core';
import {
  SearchableItem,
  SearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Course, CourseDto } from '../course-item';
import * as moment from 'moment';
import { CoursesService } from '../courses.service';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course;
  courseId: number;

  constructor(
    private router: Router,
    private courseService: CoursesService,
    private authorService: AuthorsService
  ) {}

  ngOnInit() {
    const dto = new CourseDto();
    dto.title = '';
    dto.description = '';
    dto.date = moment(Date.now(), 'DD/MM/YYYY', true).toDate();
    dto.duration = 35;

    this.authorService.getAuthors().subscribe(
      authors => {
        dto.authors = authors;
        console.log(authors);
      },
      error => console.log(error)
    );

    this.course = new Course(dto);
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
