import {
  SearchableItem,
  SearchableItemDto
} from '../../shared-components/searchable-item/searchable-item';
import { Author, AuthorDto } from './author';

export class CourseDto extends SearchableItemDto {
  authors: AuthorDto[];
  length: number;
  isTopRated: boolean;
  name: string;
}

export class Course extends SearchableItem {
  authors: Author[];

  constructor(dto: CourseDto) {
    super(dto);

    //this.authors = dto.authors.map(a => new Author(a));

    this.authors = dto.authors;
    this.title = dto.title;
    this.duration = dto.length;
    this.topRated = dto.isTopRated;
  }
}
