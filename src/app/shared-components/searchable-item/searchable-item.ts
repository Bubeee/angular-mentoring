export class SearchableItemDto {
  public id: number;
  public title: string;
  public creationDate: Date;
  public additionalInfo: number;
  public description: string;
  public topRated: boolean;
}

export abstract class SearchableItem implements SearchableItemDto {
  public id: number;
  public title: string;
  public creationDate: Date;
  public additionalInfo: number;
  public description: string;
  public topRated: boolean;

  constructor(dto: SearchableItemDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.creationDate = dto.creationDate;
    this.additionalInfo = dto.additionalInfo;
    this.description = dto.description;
    this.topRated = dto.topRated;
  }
}
