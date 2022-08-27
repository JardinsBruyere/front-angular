import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DataService} from "@jardin-bruyere/api-service";

@Component({
  selector: 'jardin-bruyere-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  retour:any
  donnees: any;
  constructor(dataService:DataService) {
    dataService.getNumberCapteur().subscribe(
      (a:Array<any>)=>{
        this.retour=a[0];
      })
    dataService.getListOfCapteurs().subscribe(
      (a:Array<any>)=>{
        this.retour=a;
      })
  }
}
