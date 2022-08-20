import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HelpComponent } from './help/help.component';

export const demonstrationRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HelpComponent],
  exports: [HelpComponent],
})
export class DemonstrationModule {}
