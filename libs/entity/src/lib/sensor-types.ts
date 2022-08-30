export class SensorTypes {
  get Unit(): String {
    return this._Unit;
  }
  get id(): Number {
    return this._id;
  }
  private readonly _id:Number;
  private readonly _Unit:String;
  constructor(id:Number,Unit:String) {
    this._id=id;
    this._Unit=Unit;
  }
}
