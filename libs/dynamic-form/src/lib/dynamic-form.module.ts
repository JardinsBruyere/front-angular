import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [DynamicFormComponent, ControlMessagesComponent],
  exports: [DynamicFormComponent],
  providers:[FormsModule]
})
export class DynamicFormModule {}
