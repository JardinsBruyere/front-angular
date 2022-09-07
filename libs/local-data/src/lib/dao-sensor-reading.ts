import {GenericDao} from "./generic-dao";
import {DaoStation} from "./dao-station";

export class DaoSensorReading extends GenericDao{
  static dao:DaoSensorReading
  static getInstance() {
    if(this.dao==null){
      this.dao = new DaoSensorReading()
    }
    return this.dao;
  }
}
