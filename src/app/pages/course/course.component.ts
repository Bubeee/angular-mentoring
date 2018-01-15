import { Component, OnInit, Input } from '@angular/core';
import {
  SearchableItem,
  SearchableItemDto
} from '../../shared-components/searchable-item/searchable-item';
import { CourseItem } from '../courses/course-item';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: SearchableItem;

  constructor() {}

  ngOnInit() {
    const dto = new SearchableItemDto();
    dto.duration = 30;
    dto.date = new Date();

    this.course = new CourseItem(dto);
  }

  save() {}

  cancel() {}
}
