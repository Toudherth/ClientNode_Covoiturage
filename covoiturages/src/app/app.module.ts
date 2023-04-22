import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovoituragesComponent } from './covoiturages/covoiturages.component';
import { InternautesComponent } from './internautes/internautes.component';
import { UsersComponent } from './users/users.component';
import { TransportsComponent } from './transports/transports.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    CovoituragesComponent,
    InternautesComponent,
    UsersComponent,
    TransportsComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
