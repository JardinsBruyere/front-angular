import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {HelpComponent} from "@jardin-bruyere/demonstration";
import {HomeComponent} from "../../../../libs/home/src/lib/home/home.component";
import {DefaultComponent} from "@jardin-bruyere/default";
import {HttpClientModule} from "@angular/common/http";
import {MenutoolbarComponent} from "../../../../libs/menu/src/lib/menutoolbar/menutoolbar.component";
import {AboutComponent} from "../../../../libs/demonstration/src/lib/about/about.component";
import {SidenavComponent} from "../../../../libs/menu/src/lib/sidenav/sidenav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DisplaybuttonComponent} from "../../../../libs/menu/src/lib/displaybutton/displaybutton.component";
import {MatDividerModule} from "@angular/material/divider";
import {TootlbarComponent} from "../../../../libs/menu/src/lib/tootlbar/tootlbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MenutoolbarComponent, SidenavComponent, DisplaybuttonComponent, TootlbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'help',
          component: HelpComponent,
        },
        {
          path: 'home',
          component: HomeComponent,
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: '**',
          component: DefaultComponent,
        }
      ]),
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
