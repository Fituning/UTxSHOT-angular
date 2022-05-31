import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LieuxComponent } from './lieux/lieux.component';
import { PartiesComponent } from './parties/parties.component';
import { VentesComponent } from './ventes/ventes.component';
import { WikishotComponent } from './wikishot/wikishot.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ventes', component: VentesComponent},
  {path:'wikishot', component: WikishotComponent},
  {path:'lieux', component: LieuxComponent},
  {path:'parties', component: PartiesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
