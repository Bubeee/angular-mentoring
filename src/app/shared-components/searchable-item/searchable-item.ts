export class SearchableItemDto {
  public id: number;
  public title: string;
  public date: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;
}

export abstract class SearchableItem implements SearchableItemDto {
  public id: number;
  public title: string;
  public date: Date;
  public duration: number;
  public description: string;
  public topRated: boolean;

  constructor(dto: SearchableItemDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.date = dto.date;
    this.duration = dto.duration;
    this.description = dto.description;
    this.topRated = dto.topRated;
  }
}
