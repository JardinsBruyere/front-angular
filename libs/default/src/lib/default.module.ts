import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [CommonModule],
    declarations: [DefaultComponent],
    exports: [
        DefaultComponent
    ]
})
export class DefaultModule {}
