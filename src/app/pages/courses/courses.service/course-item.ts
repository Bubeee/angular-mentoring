import {
  SearchableItem,
  ISearchableItemDto
} from '../../../shared-components/searchable-item/searchable-item';
import { Author, AuthorDto } from '../authors.service/author';

export class CourseDto {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  authors: AuthorDto[];
  length: number;
}

export class Course extends SearchableItem {
  authors: Author[];

  constructor(dto: CourseDto) {
    super({
      id: dto.id,
      title: dto.name,
      date: dto.date,
      duration: dto.length,
      description: dto.description,
      topRated: dto.isTopRated
    });

    this.authors = dto.authors.map(a => new Author(a));
  }
}
