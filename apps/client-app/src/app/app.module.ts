import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HelpComponent } from '@jardin-bruyere/demonstration';
import {OverlaySidenavModule} from "../../../../libs/overlay/sidenav/src";
import {DefaultComponent} from "@jardin-bruyere/default";
import {HomeComponent} from "../../../../libs/home/src/lib/home/home.component";

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
          path:'home',
          component:HomeComponent,
        },
        {
          path:'**',
          component:DefaultComponent,
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    OverlaySidenavModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
