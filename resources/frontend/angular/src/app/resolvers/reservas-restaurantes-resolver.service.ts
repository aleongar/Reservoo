import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ReservationsServiceService } from '../service/reservations-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasRestaurantesResolverService implements Resolve<any> {

  constructor(private reservationService: ReservationsServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.reservationService.getReservationsForRestaurant(route.paramMap.get('id') ?? '');
  }
}
