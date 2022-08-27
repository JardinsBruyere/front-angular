import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {SidenavComponent} from "../../../../libs/menu/src/lib/sidenav/sidenav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DisplaybuttonComponent} from "../../../../libs/menu/src/lib/displaybutton/displaybutton.component";
import {MatDividerModule} from "@angular/material/divider";
import {TootlbarComponent} from "../../../../libs/menu/src/lib/tootlbar/tootlbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SidenavComponent, DisplaybuttonComponent, TootlbarComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
