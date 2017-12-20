import { Pipe, PipeTransform } from '@angular/core';
import { SearchableItem } from '../shared-components/searchable-item/searchable-item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: SearchableItem[], name: string): any {
    const filtered = value.filter(
      item => item.title.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
    return filtered;
  }
}
