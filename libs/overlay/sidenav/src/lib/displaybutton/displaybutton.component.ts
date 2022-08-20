import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BoutonSideNav} from "../bouton-side-nav";

@Component({
  selector: 'jardin-bruyere-displaybutton',
  templateUrl: './displaybutton.component.html',
  styleUrls: ['./displaybutton.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DisplaybuttonComponent {
  @Input()
  buttonList!:BoutonSideNav[]
}
