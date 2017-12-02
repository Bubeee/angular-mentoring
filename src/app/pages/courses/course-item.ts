import { SearchableItem } from '../../shared-components/searchable-item/searchable-item';

export class CourseItem extends SearchableItem {
  constructor(
    id: number,
    title: string,
    creationDate: Date,
    additionalInfo: string,
    description: string
  ) {
    super(id, title, creationDate, additionalInfo, description);

  }
}
