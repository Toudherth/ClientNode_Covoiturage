import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovoituragesComponent } from './covoiturages/covoiturages.component';
import { InternautesComponent } from './internautes/internautes.component';
import { UsersComponent } from './users/users.component';
import { TransportsComponent } from './transports/transports.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path: "covoiturages", component: CovoituragesComponent},
  {path:"internautes", component:InternautesComponent},
  {path:"transports", component:TransportsComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"users", component: UsersComponent}   //   {path:"users/:username", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
