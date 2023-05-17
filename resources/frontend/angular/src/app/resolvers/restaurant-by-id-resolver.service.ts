import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RestaurantServiceService } from '../service/restaurant-service.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantByIdResolverService implements Resolve<any>{

  constructor(private restaurantService: RestaurantServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.restaurantService.getRestaurantById(route.paramMap.get('id') ?? '');
  }
}
