import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ReservasComponent } from './reservas/reservas.component';

const routes: Routes = [
  {path: '', component: IndexComponent, children:[
    {path: '', component: UsersComponent},
    {path: 'users', component: UsersComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'reservas', component: ReservasComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
