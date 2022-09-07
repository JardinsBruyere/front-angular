import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PersistentData {
  public static getUsedSize(){
    let _lsTotal = 0,
      _xLen, _x;
    for (_x in localStorage) {
      if (!localStorage.hasOwnProperty(_x)) {
        continue;
      }
      _xLen = ((localStorage[_x].length + _x.length) * 2);
      _lsTotal += _xLen;
      console.log(`${_x.substring(0, 50)} = ${(_xLen / 1024).toFixed(2)} KB`)
    }
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
  }

  public static set(key: string,value: string): void{
    localStorage.setItem(key,JSON.stringify(value))
  }
  public static get(key: string): string|null{
    let retour = localStorage.getItem(key)
    if (retour != null) {
      return JSON.parse(retour)
    } else
      return null
  }
  public static remove(key: string): void{
    localStorage.removeItem(key);
  }
  public static clear():void{
    localStorage.clear();
  }
}

