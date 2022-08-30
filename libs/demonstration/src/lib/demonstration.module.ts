import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

export const demonstrationRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HelpComponent, AboutComponent],
  exports: [HelpComponent,AboutComponent],
})
export class DemonstrationModule {}
