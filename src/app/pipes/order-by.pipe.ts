import { Pipe, PipeTransform } from '@angular/core';
import { SearchableItem } from '../shared-components/searchable-item/searchable-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: SearchableItem[], sortBy: string, args?: any): any {
    const filteredArray = value.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : 0);
    return filteredArray;
  }
}
