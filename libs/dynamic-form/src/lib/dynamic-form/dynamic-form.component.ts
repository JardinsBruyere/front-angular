import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {GenericContainer, GenericContainerArray} from "@jardin-bruyere/entity";

@Component({
  selector: 'jardin-bruyere-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less'],
})
export class DynamicFormComponent implements OnInit{
  userForm: any;
  formBuilder!:FormBuilder
  @Input()
  name!:string;
  @Input()
  allLine!:string[];
  constructor(formBuilder: FormBuilder) {
    this.formBuilder=formBuilder;
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      let listField:GenericContainerArray=new GenericContainerArray()
      this.allLine.forEach(
        (a: string)=>{
          listField.push(new GenericContainer(a,this.userForm.value[a]))
        })
      listField.display();
    }
  }

  ngOnInit(): void {
    console.log(this.allLine);
    const stuff: { [key: string]: any; } = {};
    this.allLine.forEach((a)=>{
      stuff[a]=['', Validators.required]
    });
    this.userForm = this.formBuilder.group(stuff);
  }
}
