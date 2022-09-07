import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GenericEntityBdd, Sensor, SensorReading, SensorTypes, Station} from "@jardin-bruyere/entity";

@Component({
  selector: 'jardin-bruyere-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AdmiComponent implements OnInit{
  sensor!: GenericEntityBdd;
  sensorType!:GenericEntityBdd;
  sensorReading!:GenericEntityBdd;
  station!:GenericEntityBdd;
  ngOnInit(): void {
    this.sensor=        Sensor.buildCustom(1,2,new Date(),1,"super sensor");
    this.sensorType=    SensorTypes.buildCustom(1,"°C");
    this.sensorReading= SensorReading.buildCustom(1,1,new Date(),1);
    this.station=       Station.buildCustom(1,"super station")
  }


}
