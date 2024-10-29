import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionDetailsPage } from './champion-details.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionDetailsPageRoutingModule {}
