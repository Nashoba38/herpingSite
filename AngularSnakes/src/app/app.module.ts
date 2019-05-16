import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SnakesComponent } from "./Serpents/snakes/snakes.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./marocHome/home.component";
import { SnakesMiniaturesComponent } from "./Serpents/snakes-miniatures/snakes-miniatures.component";
import { SnakeDetailComponent } from "./Serpents/snake-detail/snake-detail.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LezardsComponent } from "./Lézards/lezards/lezards.component";
import { LezardMiniaturesComponent } from "./Lézards/lezards-miniatures/lezards-miniatures.component";
import { LezardDetailComponent } from "./Lézards/lezard-detail/lezard-detail.component";
import { SiteHomeComponent } from "./site-home/site-home.component";



@NgModule({
  declarations: [
    AppComponent,
    SnakesComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SnakesMiniaturesComponent,
    SnakeDetailComponent,
    LezardsComponent,
    LezardMiniaturesComponent,
    LezardDetailComponent,
    SiteHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
