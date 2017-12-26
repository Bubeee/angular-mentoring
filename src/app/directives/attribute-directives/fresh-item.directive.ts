import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFreshItem]'
})
export class FreshItemDirective implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('appFreshItem') createdDate: Date;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const twoWeeksBefore = new Date();
    twoWeeksBefore.setDate(currentDate.getDate() - 14);
    if (
      currentDate > this.createdDate &&
      this.createdDate >= twoWeeksBefore
    ) {
      this.element.nativeElement.style.borderColor = 'green';
    } else if (this.createdDate > currentDate) {
      this.element.nativeElement.style.borderColor = 'blue';
    }
  }
}
