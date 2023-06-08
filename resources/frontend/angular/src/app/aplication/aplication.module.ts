import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicationRoutingModule } from './aplication-routing.module';
import { MisRestaurantesComponent } from './mis-restaurantes/mis-restaurantes.component';
import { IndexComponent } from './index/index.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { NavComponent } from './nav/nav.component';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ExploreComponent } from './explore/explore.component';
import { ExploreCardsComponent } from './explore-cards/explore-cards.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IframeComponent } from './iframe/iframe.component';
import { SafeHTMLPipe } from './pipe/safe-html.pipe';


@NgModule({
  declarations: [
    MisRestaurantesComponent,
    IndexComponent,
    RestaurantCardComponent,
    NavComponent,
    GestionRestauranteComponent,
    GestionUsuarioComponent,
    ModificarUsuarioComponent,
    MisReservasComponent,
    ReservationCardComponent,
    ExploreComponent,
    ExploreCardsComponent,
    RestaurantComponent,
    IframeComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    NgbCarouselModule
  ]
})
export class AplicationModule { }
