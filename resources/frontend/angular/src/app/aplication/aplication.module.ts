import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { MisRestaurantesComponent } from './mis-restaurantes/mis-restaurantes.component';
import { IndexComponent } from './index/index.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { NavComponent } from './nav/nav.component';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';


@NgModule({
  declarations: [
    MisRestaurantesComponent,
    IndexComponent,
    RestaurantCardComponent,
    NavComponent,
    GestionRestauranteComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule
  ]
})
export class AplicationModule { }
