import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {
  GenericContainerArray,
  GenericEntityBdd, Sensor,
  SensorReading,
} from "@jardin-bruyere/entity";
import {DaoSensor, PersistentData} from "@jardin-bruyere/local-data";

@Component({
  selector: 'jardin-bruyere-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less'],
})
export class DynamicFormComponent implements OnInit{
  userForm: any;
  formBuilder!:FormBuilder
  name!:string;
  allLine!:string[];
  daoSensor!:DaoSensor;
  @Input()
  objet!:GenericEntityBdd;
  listOfParameter!:string[]
  createdObject!: GenericEntityBdd;
  constructor(formBuilder: FormBuilder,daoSensor:DaoSensor) {
    this.formBuilder=formBuilder;
    this.daoSensor=daoSensor;
  }

  ngOnInit(): void {
    this.name=this.objet.constructor.name
    this.allLine=
      Object.getOwnPropertyNames(this.objet)
        .map((a)=>a.substring(1))
        .filter((a)=>!(this.objet.listUnchangeField.indexOf(a)>-1) )
    const stuff: { [key: string]: any; } = {};
    this.allLine.forEach((a)=>{
      stuff[a]=['', Validators.required]
    });
    this.userForm = this.formBuilder.group(stuff);
    this.listOfParameter = this.objet.listArg()
    console.log(this.listOfParameter)
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      let listField:GenericContainerArray=new GenericContainerArray(this.allLine,this.userForm.value)
      console.log(listField.listOfGenericContainer)
      console.log(this.listOfParameter)
      let allSortedField:any[]= []
      this.listOfParameter.forEach((a:string)=>{
        console.log("valeur de "+a+"="+listField.get(a));
        allSortedField.push(listField.get(a))
      })
      console.log(allSortedField);
      const object = this.objet as object;
      const test = this as object;
      let a="object.buildClassic(\""+allSortedField.join("\",\"")+"\")"
      let sentence="test.createdObject = "+a;
      eval(sentence);
      console.log(sentence)
      console.log(this.createdObject)
      this.createdObject.save();
    }
  }
}
