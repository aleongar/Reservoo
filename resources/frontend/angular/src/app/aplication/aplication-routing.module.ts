import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MisRestaurantesComponent } from './mis-restaurantes/mis-restaurantes.component';
import { UserResolverService } from '../resolvers/user-resolver.service';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';
import { RestaurantResolverService } from '../resolvers/restaurant-resolver.service';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: 'misRestaurantes', component: MisRestaurantesComponent, resolve: {
      user: UserResolverService
    }},
    {path: 'anadirRestaurante', component: GestionRestauranteComponent},
    {path: 'modificarRestaurante/:id', component: GestionRestauranteComponent, resolve: {
      restaurante: RestaurantResolverService
    }}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
