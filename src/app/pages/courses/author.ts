import { ISelectableItem } from '../../shared-components/controls/picker/selectable-item';

export interface IAuthorDto {
  id: number;
  firstName: string;
  lastName: string;
}

export class Author implements IAuthorDto, ISelectableItem {
  id: number;
  firstName: string;
  lastName: string;

  checked: boolean;
  value: number;
  name: string;

  constructor(dto: IAuthorDto) {
    this.id = this.value = dto.id;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
    this.name = `${this.firstName} ${this.lastName}`;
    this.checked = false;
  }
}
