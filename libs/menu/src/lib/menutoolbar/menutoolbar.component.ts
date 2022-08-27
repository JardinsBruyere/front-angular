import {
  Component,
  Input, OnInit,
} from '@angular/core';
import {Router} from "@angular/router";
import {BoutonSideNav} from "../bouton-side-nav";
@Component({
  selector: 'jardin-bruyere-menutoolbar',
  templateUrl: './menutoolbar.component.html',
  styleUrls: ['./menutoolbar.component.css']
})
export class MenutoolbarComponent implements OnInit{

  buttonList: BoutonSideNav[] = [];
  ngOnInit(): void {
    this.buttonList.push(
      new BoutonSideNav("/home","Accueil"),
      new BoutonSideNav("/listeCapteur","Liste des capteurs"),
      new BoutonSideNav("/graphe","Graphique"),
      new BoutonSideNav("/admi","Administration"),
      new BoutonSideNav("/help","Aide"),
      new BoutonSideNav("/about","A propos")
    )
  }

}
