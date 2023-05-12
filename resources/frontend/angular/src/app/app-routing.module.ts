import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponentComponent } from './index-component/index-component.component';
import { LoginComponent } from './login/login.component';
import { RegistroCienteComponent } from './registro-ciente/registro-ciente.component';
import { RestaurantesInfoComponent } from './restaurantes-info/restaurantes-info.component';


const routes: Routes = [
  {path: '', component: IndexComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'register', component: RegistroCienteComponent},
  {path: 'infoRestaurants', component: RestaurantesInfoComponent},
  {path: 'app', loadChildren: () => import('./aplication/aplication.module').then(m => m.AplicationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
