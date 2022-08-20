import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'jardin-bruyere-tootlbar',
  templateUrl: './tootlbar.component.html',
  styleUrls: ['./tootlbar.component.less'],
})
export class TootlbarComponent {
  @Input()
  sidenav!: MatSidenav;
}
