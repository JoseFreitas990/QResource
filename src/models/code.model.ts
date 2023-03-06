export class Code {
  public id?: number;
  public name: string;
  public data: string;
  public type: string;
  public createdOn?: Date;

  constructor(
    id: number,
    name: string,
    data: string,
    type: string,
    createdOn: Date
  ) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.type = type;
    this.createdOn = createdOn;
  }
}
