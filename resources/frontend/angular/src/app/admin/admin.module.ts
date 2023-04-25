import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ReservasComponent } from './reservas/reservas.component';


@NgModule({
  declarations: [
    IndexComponent,
    UsersComponent,
    RestaurantesComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class AdminModule { }
