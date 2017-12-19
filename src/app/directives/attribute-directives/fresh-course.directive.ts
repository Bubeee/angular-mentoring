import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFreshCourse]'
})
export class FreshCourseDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appFreshCourse') createdDate: Date;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const currentDate = new Date();
    if (
      currentDate < this.createdDate &&
      this.createdDate.getDate() >= currentDate.getDate() - 14
    ) {
      this.element.nativeElement.style.borderColor = 'green';
    } else if (this.createdDate > currentDate) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}
