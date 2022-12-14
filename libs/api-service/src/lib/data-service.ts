import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:5001/api/";

  constructor(private httpClient: HttpClient) { }

  public getNumberCapteur():Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER+"nbCapteur");
  }
  public getListOfCapteurs():Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER+"listeTable");
  }
}
