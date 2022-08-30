import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ValidationService} from "../validation-service";

@Component({
  selector: 'jardin-bruyere-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ControlMessagesComponent {
  @Input()
  control!: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        if(ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName])=="Required")
          return "A renseigner";
      }
    }

    return null;
  }
}
