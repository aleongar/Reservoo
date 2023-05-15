import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MisRestaurantesComponent } from './mis-restaurantes/mis-restaurantes.component';
import { UserResolverService } from '../resolvers/user-resolver.service';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';
import { RestaurantResolverService } from '../resolvers/restaurant-resolver.service';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { ReservasResolverService } from '../resolvers/reservas-resolver.service';
import { ReservasRestaurantesResolverService } from '../resolvers/reservas-restaurantes-resolver.service';

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: 'misRestaurantes', component: MisRestaurantesComponent, resolve: {user: UserResolverService}},
    {path: 'reservasRestaurantes/:id', component: MisReservasComponent, resolve: {reservations: ReservasRestaurantesResolverService}},
    {path: 'anadirRestaurante', component: GestionRestauranteComponent},
    {path: 'modificarRestaurante/:id', component: GestionRestauranteComponent, resolve: {restaurante: RestaurantResolverService}},
    {path: 'gestionUsuario', component: GestionUsuarioComponent, children: [
      {path: 'modificarUsuario', component: ModificarUsuarioComponent, resolve: {user: UserResolverService}},
      {path: 'misReservas', component: MisReservasComponent, resolve: {reservations: ReservasResolverService}}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicationRoutingModule { }
