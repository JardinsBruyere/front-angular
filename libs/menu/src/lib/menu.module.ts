import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisplaybuttonComponent} from "./displaybutton/displaybutton.component";
import {MenutoolbarComponent} from "./menutoolbar/menutoolbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SidenavListComponent} from "./sidenav-list/sidenav-list.component";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {TootlbarComponent} from "./tootlbar/tootlbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, RouterModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatListModule, MatIconModule],
  declarations:[DisplaybuttonComponent,MenutoolbarComponent,SidenavComponent,SidenavListComponent,MenutoolbarComponent,TootlbarComponent],
  exports:[DisplaybuttonComponent,MenutoolbarComponent,SidenavComponent,SidenavListComponent,MenutoolbarComponent,TootlbarComponent]
})
export class MenuModule {}
