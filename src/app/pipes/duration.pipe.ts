import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const valueAsDate = new Date(0, 0, 0, 0, value, 0, 0);
    return valueAsDate.toString(); // 'hh h mm min.'
  }

}
