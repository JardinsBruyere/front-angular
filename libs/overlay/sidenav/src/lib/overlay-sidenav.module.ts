import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayToolbarModule } from '@jardin-bruyere/overlay-toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    OverlayToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    RouterModule,
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class OverlaySidenavModule {}
