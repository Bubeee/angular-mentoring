import { SearchableItem, SearchableItemDto } from '../../shared-components/searchable-item/searchable-item';

export class Course extends SearchableItem {
  constructor(
    searchableItemDto: SearchableItemDto
  ) {
    super(searchableItemDto);
  }
}
