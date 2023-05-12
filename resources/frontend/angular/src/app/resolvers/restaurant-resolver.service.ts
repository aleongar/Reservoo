import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RestaurantServiceService } from '../service/restaurant-service.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantResolverService implements Resolve<any> {

  constructor(private restaurantService: RestaurantServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.restaurantService.getRestaurantById(route.paramMap.get('id') ?? '');
  }
}
