import {GenericEntityBdd, Sensor} from "@jardin-bruyere/entity";
import {PersistentData} from "@jardin-bruyere/local-data";

export abstract class GenericDao {
  listIdAvaible:Number[]
  constructor() {
    this.listIdAvaible=[];

  }
  public getListIdAvaible():Number[]{
    return this.listIdAvaible
  }
  public getQuantity():Number{
    let quantity = (this.listIdAvaible.length == 0) ? 1 : <number>this.listIdAvaible[this.listIdAvaible.length - 1] + 1
    console.log(quantity)
    console.log(this.listIdAvaible)
    return quantity
  }

  public save(genericEntityBdd:GenericEntityBdd):void{
    this.listIdAvaible.push(genericEntityBdd.id);
    this.listIdAvaible=[...(new Set(this.listIdAvaible))].sort()
    PersistentData.set(genericEntityBdd.type()+String(genericEntityBdd.id),JSON.stringify(genericEntityBdd))
  }

  public get<T>(id:number,TCtor: new (...args: any[]) => T):T|null{
    let key = TCtor.name + String(id)
    let save=PersistentData.get(key)
    if (save != null) {
      let jsonObject;
      jsonObject = JSON.parse(save)
      console.log(jsonObject)
      return <T>jsonObject;
    }
    return save;
  }

}
