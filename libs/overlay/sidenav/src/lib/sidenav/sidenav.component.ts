import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BoutonSideNav} from "../bouton-side-nav";

@Component({
  selector: 'jardin-bruyere-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit{

  buttonList: BoutonSideNav[] = [];
  ngOnInit(): void {
    this.buttonList.push(
      new BoutonSideNav("/help","Aide")
    )
  }

}
