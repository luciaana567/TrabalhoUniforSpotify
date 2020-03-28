import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './body/home/home.component';
import { NavHeaderComponent} from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { DuvidasComponent} from './body/duvidas/duvidas.component';
import { PainelExpansivoComponent } from './body/duvidas/components/painel-expansivo/painel-expansivo.component';
import { CommunityComponent } from './body/duvidas/components/community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeaderComponent,
    FooterComponent,
    DuvidasComponent,
    PainelExpansivoComponent,
    CommunityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
