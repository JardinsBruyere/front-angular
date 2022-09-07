import {GenericEntityBdd} from "./generic-entity-bdd";
import {DaoSensorReading} from "@jardin-bruyere/local-data";

export class SensorReading extends GenericEntityBdd{
  get Value(): Number {
    return this._Value;
  }
  get DateAdded(): Date {
    return this._DateAdded;
  }
  get SensorId(): Number {
    return this._SensorId;
  }
  private readonly _SensorId:Number;
  private readonly _DateAdded:Date;
  private readonly _Value:Number;
  private constructor(id:Number,SensorId:Number,DateAdded:Date,Value:Number) {
    super(["id","DateAdded"],id,DaoSensorReading.getInstance())
    this._SensorId=SensorId;
    this._DateAdded=DateAdded;
    this._Value=Value;
  }
  public static buildCustom(id:Number,SensorId:Number,DateAdded:Date,Value:Number):SensorReading{
    return new SensorReading(id,SensorId,DateAdded,Value)
  }
  public buildClassic(SensorId:Number,Value:Number):SensorReading{
    let id= this.genericDao.getQuantity()
    let DateAdded = new Date()
    return new SensorReading(id,SensorId,DateAdded,Value)
  }
  public listArg():string[]{
    return (""+this.buildClassic)
      .split("(")[1]
      .split(")")[0]
      .replace(" ","")
      .split(",")
  }
}
