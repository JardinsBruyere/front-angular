import {GenericContainer} from "./generic-container";

export class GenericContainerArray {
  get listOfGenericContainer(): Array<GenericContainer> {
    return this._listOfGenericContainer;
  }
  private _listOfGenericContainer:Array<GenericContainer>=[]
  public push(element:GenericContainer){
    this._listOfGenericContainer.push(element)
  }
  public length():number{
    return this._listOfGenericContainer.length;
  }
  public display(){
    let output:String=""
    this._listOfGenericContainer.forEach(
      (a:GenericContainer)=>{
        output+=a.fieldName+":"+a.content+"\n"
      })
    console.log(output)
  }
}
