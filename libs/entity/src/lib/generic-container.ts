export class GenericContainer {
  get content(): any {
    return this._content;
  }
  get fieldName(): String {
    return this._fieldName;
  }
  private readonly _fieldName:String;
  private readonly _content:any;
  constructor(fieldName:String,content:any) {
    this._fieldName=fieldName;
    this._content=content;
  }
}
