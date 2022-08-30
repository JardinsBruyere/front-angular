import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {HelpComponent} from "@jardin-bruyere/demonstration";
import {DefaultComponent} from "@jardin-bruyere/default";
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "@jardin-bruyere/demonstration";
import {MenuModule} from "@jardin-bruyere/menu";
import {HomeComponent} from "@jardin-bruyere/home";
import {AdmiComponent} from "@jardin-bruyere/admi";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
          path:'admi',
          component:AdmiComponent,
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
    MenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
