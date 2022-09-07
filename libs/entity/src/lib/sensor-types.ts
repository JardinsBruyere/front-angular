import {GenericEntityBdd} from "./generic-entity-bdd";
import {DaoSensorTypes} from "@jardin-bruyere/local-data";

export class SensorTypes extends GenericEntityBdd{
  get Unit(): String {
    return this._Unit;
  }
  private readonly _Unit:String;
  private constructor(id:Number,Unit:String) {
    super(["id"],id,DaoSensorTypes.getInstance())
    this._Unit=Unit;
  }
  public static buildCustom(id:Number,Unit:String):SensorTypes{
    return new SensorTypes(id,Unit)
  }
  public buildClassic(Unit:String):SensorTypes{
    let id= this.genericDao.getQuantity()
    return new SensorTypes(id,Unit)
  }
  public listArg():string[]{
    return (""+this.buildClassic)
      .split("(")[1]
      .split(")")[0]
      .replace(" ","")
      .split(",")
  }
}
