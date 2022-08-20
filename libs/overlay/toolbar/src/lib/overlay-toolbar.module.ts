import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TootlbarComponent } from './tootlbar/tootlbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [TootlbarComponent],
  exports: [TootlbarComponent],
})
export class OverlayToolbarModule {}
