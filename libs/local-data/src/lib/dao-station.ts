import {GenericDao} from "./generic-dao";

export class DaoStation extends GenericDao{
  static dao:DaoStation
  static getInstance() {
    if(this.dao==null){
      this.dao = new DaoStation()
    }
    return this.dao;
  }

}
