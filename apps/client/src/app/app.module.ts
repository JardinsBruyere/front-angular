import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {HelpComponent} from "@jardin-bruyere/demonstration";
import {HomeComponent} from "../../../../libs/home/src/lib/home/home.component";
import {DefaultComponent} from "@jardin-bruyere/default";
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "@jardin-bruyere/demonstration";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuModule} from "@jardin-bruyere/menu";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
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
    BrowserAnimationsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
