import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ReservationsServiceService } from '../service/reservations-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasResolverService implements Resolve<any> {

  constructor(private reservasService: ReservationsServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.reservasService.getReservationsForUser(localStorage.getItem('id') ?? '');
  }
}
