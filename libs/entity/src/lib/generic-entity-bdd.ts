import {GenericDao} from "@jardin-bruyere/local-data";

export abstract class GenericEntityBdd {
  get genericDao(): GenericDao {
    return this._genericDao;
  }
  get listUnchangeField(): String[] {
    return this._listUnchangeField;
  }

  get id(): Number {
    return this._id;
  }

  private readonly _id: Number;
  private readonly _listUnchangeField: String[] = [];
  private readonly _genericDao:GenericDao

  protected constructor(listUnchangeField: String[], id: Number,genericDao:GenericDao) {
    listUnchangeField.push("listUnchangeField","genericDao",);
    this._listUnchangeField = (listUnchangeField);
    this._id = id;
    this._genericDao=genericDao;
  }

  public type() {
    return (<any>this).constructor.name
  }

  public static generate(create: string) {
    return eval.call(this, "this")
  }
  public thisType(){
    return this;
  }

  public abstract listArg():string[];

  public save():void{
    this.genericDao.save(this);
  }
}

