import { Injectable } from '@angular/core';

@Injectable()
export class Course {
  id: number;
  name: string;
  description: string;
  duration: Date;
  date: Date;

  constructor() { }
}
