import {GenericEntityBdd} from "./generic-entity-bdd";
import {DaoSensor} from "@jardin-bruyere/local-data";

export class Sensor extends GenericEntityBdd{
  public generate(): string {
      return "me";
  }
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
  private readonly _Type:Number;
  private readonly _DateAdded:Date;
  private readonly _Station:Number;
  private readonly _Nom:String;
  constructor(id:Number,Type:Number,DateAdded:Date,Station:Number,Nom:String){
    super(["id","DateAdded"],id,DaoSensor.getInstance())
    this._Nom=Nom;
    this._Type=Type;
    this._DateAdded=DateAdded;
    this._Station=Station;
  }
  public static buildCustom(id:Number,Type:Number,DateAdded:Date,Station:Number,Nom:String):Sensor{
    return new Sensor(id,Type,DateAdded,Station,Nom)
  }
  public buildClassic(Type:Number,Station:Number,Nom:String):Sensor{
    let id= this.genericDao.getQuantity()
    let DateAdded = new Date()
    return new Sensor(id,Type,DateAdded,Station,Nom)
  }

  static buildRandom() {
    return new Sensor(1,1,new Date(),1,"test")
  }

  public static test(){
    return "test réussi"
  }
  public listArg():string[]{
    return (""+this.buildClassic)
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map(str => str.replace(/\s/g, ''))
  }
}
