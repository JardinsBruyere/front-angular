export class SensorReading {
  get Value(): Number {
    return this._Value;
  }
  get DateAdded(): Date {
    return this._DateAdded;
  }
  get SensorId(): Number {
    return this._SensorId;
  }
  get id(): Number {
    return this._id;
  }
  private readonly _id:Number;
  private readonly _SensorId:Number;
  private readonly _DateAdded:Date;
  private readonly _Value:Number;
  constructor(id:Number,SensorId:Number,DateAdded:Date,Value:Number) {
    this._id=id;
    this._SensorId=SensorId;
    this._DateAdded=DateAdded;
    this._Value=Value;
  }
}
