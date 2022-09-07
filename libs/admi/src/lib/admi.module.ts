import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmiComponent } from './admi/admi.component';
import { DynamicFormModule } from '@jardin-bruyere/dynamic-form';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, DynamicFormModule],
  declarations: [AdmiComponent],
  exports: [AdmiComponent],
})
export class AdmiModule {}
