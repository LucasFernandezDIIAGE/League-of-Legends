import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChampionDetailsPageRoutingModule } from './champion-details-routing.module';

import { ChampionDetailsPage } from './champion-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChampionDetailsPageRoutingModule
  ],
  declarations: [ChampionDetailsPage]
})
export class ChampionDetailsPageModule {}
