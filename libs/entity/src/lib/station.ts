import {GenericEntityBdd} from "./generic-entity-bdd";
import {DaoStation} from "@jardin-bruyere/local-data";

export class Station extends GenericEntityBdd{
  get Name(): String {
    return this._Name;
  }
  private readonly _Name:String;
  private constructor(id:Number,Name:String) {
    super(["id"],id,DaoStation.getInstance())
    this._Name=Name;
  }
  public static buildCustom(id:Number,Name:String):Station{
    return new Station(id,Name)
  }
  public buildClassic(Name:String):Station{
    let id= this.genericDao.getQuantity()
    return new Station(id,Name)
  }
  public listArg():string[]{
    return (""+this.buildClassic)
      .split("(")[1]
      .split(")")[0]
      .replace(" ","")
      .split(",")
  }
}
