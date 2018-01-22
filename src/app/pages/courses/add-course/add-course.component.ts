import { Component, OnInit } from '@angular/core';
import { SearchableItem, SearchableItemDto } from '../../../shared-components/searchable-item/searchable-item';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseItem } from '../course-item';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: SearchableItem;
  courseId: number;

  constructor(private router: Router, route: ActivatedRoute) {
    this.courseId = route.snapshot.params['id'];
  }

  ngOnInit() {
    const dto = new SearchableItemDto();
    dto.duration = 30;
    dto.date = new Date();

    this.course = new CourseItem(dto);
  }

  save() {}

  cancel() {
    this.router.navigate(['courses']);
  }
}
