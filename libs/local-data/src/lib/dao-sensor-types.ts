import {GenericDao} from "./generic-dao";

export class DaoSensorTypes  extends GenericDao{
  static dao:DaoSensorTypes
  static getInstance() {
    if(this.dao==null){
      this.dao = new DaoSensorTypes()
    }
    return this.dao;
  }

}
