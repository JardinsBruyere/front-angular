import {GenericContainer} from "./generic-container";

export class GenericContainerArray {
  private _listOfGenericContainer: { [key: string]: any; } = {}
  constructor(allLine: string[], value: { [x: string]: any; }) {
    allLine.forEach(
      (a: string)=>{
        this._listOfGenericContainer[a]=value[a]
      })
  }
  get listOfGenericContainer(): { [p: string]: any } {
    return this._listOfGenericContainer;
  }
  public display(){
    console.log(this._listOfGenericContainer)
  }
  public get(key:string):any{
    return this._listOfGenericContainer[key];
  }
}
