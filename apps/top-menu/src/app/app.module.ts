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

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MenutoolbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'help',
          component: HelpComponent,
        },
        {
          path:'home',
          component:HomeComponent,
        },
        {
          path:'about',
          component:AboutComponent,
        },
        {
          path:'',
          component:HomeComponent,
        },
        {
          path:'**',
          component:DefaultComponent,
        }
      ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
