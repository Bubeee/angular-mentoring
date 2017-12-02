export abstract class SearchableItem {
  public id: number;
  public title: string;
  public creationDate: Date;
  public additionalInfo: string;
  public description: string;

  constructor(
    id: number,
    title: string,
    creationDate: Date,
    additionalInfo: string,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.additionalInfo = additionalInfo;
    this.description = description;
  }
}
