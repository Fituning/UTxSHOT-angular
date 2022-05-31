import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VentesComponent } from './ventes/ventes.component';
import { VenteCarteComponent } from './vente-carte/vente-carte.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WikishotComponent } from './wikishot/wikishot.component';
import { LieuxComponent } from './lieux/lieux.component';
import { PartiesComponent } from './parties/parties.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VentesComponent,
    VenteCarteComponent,
    FooterComponent,
    HomeComponent,
    WikishotComponent,
    LieuxComponent,
    PartiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
