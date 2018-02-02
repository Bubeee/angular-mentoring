export class AuthorDto {
  id: number;
  firstName: string;
  lastName: string;
}

export class Author {
  id: number;
  firstName: string;
  lastName: string;

  constructor(dto: AuthorDto) {
    this.id = dto.id;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
