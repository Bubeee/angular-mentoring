export interface ISearchableItemDto {
  id: number;
  title: string;
  date: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export class SearchableItem implements ISearchableItemDto {
  public id: number;
  public title: string;
  public date: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;

  constructor(dto: ISearchableItemDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.date = dto.date;
    this.duration = dto.duration;
    this.description = dto.description;
    this.topRated = dto.topRated;
  }
}
