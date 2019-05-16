import { SiteHomeComponent } from './site-home/site-home.component';
import { LezardDetailComponent } from './Lézards/lezard-detail/lezard-detail.component';
import { LezardMiniaturesComponent } from './Lézards/lezards-miniatures/lezards-miniatures.component';
import { LezardsComponent } from './Lézards/lezards/lezards.component';
import { HomeComponent } from './marocHome/home.component';
import { SnakesComponent } from './Serpents/snakes/snakes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakesMiniaturesComponent } from './Serpents/snakes-miniatures/snakes-miniatures.component';
import { SnakeDetailComponent } from './Serpents/snake-detail/snake-detail.component';

const routes: Routes = [
  { path: '', component: SiteHomeComponent },
  { path: 'marocHome', component: HomeComponent },
  { path: 'snakes', component: SnakesComponent },
  { path: 'cards', component: SnakesMiniaturesComponent },
  { path: 'detail/:id', component: SnakeDetailComponent },
  { path: 'lezards', component: LezardsComponent },
  { path: 'lezardsCards', component: LezardMiniaturesComponent },
  { path: 'lezardDetail/:id', component: LezardDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
