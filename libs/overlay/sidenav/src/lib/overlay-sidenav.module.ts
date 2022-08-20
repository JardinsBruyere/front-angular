import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayToolbarModule } from '@jardin-bruyere/overlay-toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    OverlayToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class OverlaySidenavModule {}
