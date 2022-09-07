import {Injectable} from "@angular/core";
import {GenericDao} from "./generic-dao";

@Injectable({
  providedIn: 'root'
})
export class DaoSensor extends GenericDao{
  static daoSensor:DaoSensor
  static getInstance() {
    if(this.daoSensor==null){
      this.daoSensor = new DaoSensor()
    }
    return this.daoSensor;
  }

}
