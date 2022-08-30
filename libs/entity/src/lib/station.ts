export class Station {
  get Name(): String {
    return this._Name;
  }
  get id(): Number {
    return this._id;
  }
  private readonly _id:Number;
  private readonly _Name:String;
  constructor(id:Number,Name:String) {
    this._id=id;
    this._Name=Name;
  }
}
