import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurantes-info',
  templateUrl: './restaurantes-info.component.html',
  styleUrls: ['./restaurantes-info.component.scss']
})
export class RestaurantesInfoComponent {

  constructor(private router: Router){

  }

  protected toggleCollapse(){
    let button = document.getElementById('collapse-button');
    let expanded = button?.getAttribute('aria-expanded');
    if(expanded == 'false'){
        document.getElementById("nav-content")?.classList.add("flex");
        document.getElementById("nav-content")?.classList.remove("hidden");
    }else{
        document.getElementById("nav-content")?.classList.remove("flex");
        document.getElementById("nav-content")?.classList.add("hidden");
    }
    button?.setAttribute('aria-expanded', expanded == 'false' ? 'true' : 'false')
  }

  protected registerRestaurant(){
    sessionStorage.setItem('restaurantRegistration', 'true');
    this.router.navigate(['../register']);
  }
}
