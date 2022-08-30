export class Sensor {
  get Nom(): String {
    return this._Nom;
  }
  get Station(): Number {
    return this._Station;
  }
  get DateAdded(): Date {
    return this._DateAdded;
  }
  get Type(): Number {
    return this._Type;
  }
  get id(): Number {
    return this._id;
  }
  private readonly _id:Number;
  private readonly _Type:Number;
  private readonly _DateAdded:Date;
  private readonly _Station:Number;
  private readonly _Nom:String;
  constructor(id:Number,Type:Number,DateAdded:Date,Station:Number,Nom:String){
    this._Nom=Nom;
    this._Type=Type;
    this._DateAdded=DateAdded;
    this._id=id;
    this._Station=Station;
  }
}
