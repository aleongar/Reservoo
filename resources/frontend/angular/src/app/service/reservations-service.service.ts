import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Reservation } from '../interfaces/reservation.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsServiceService {

  private url = 'http://127.0.0.1:8000/api/reservations' //TODO: cambiar cuando tal

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.url).pipe(
      map((res => res))
    );
  }

  getReservationsForUserDay(userId: string, date: string){
    return this.http.get<Reservation[]>(this.url+ '/user/'+ userId +'/'+date).pipe(
      map((res => res))
    );
  }

  getReservationsForRestaurantDay(restaurantId: string, date: string){
    return this.http.get<Reservation[]>(this.url+ '/rest/'+ restaurantId +'/'+date).pipe(
      map((res => res))
    );
  }
  getReservationsForRestaurant(restaurantId: string){
    return this.http.get<Reservation[]>(this.url+ '/rest/'+ restaurantId ).pipe(
      map((res => res))
    );
  }

  getReservationsForUser(userId: string){
    return this.http.get<Reservation[]>(this.url+ '/user/'+ 21).pipe(
      map((res => res))
    );
  }

  postReservation(userData: any){
    return this.http.post<any>(this.url + '/', userData);
  }

  putReservation(id: string, userData: any){
    return this.http.put<any>(this.url + '/'+ id, userData);
  }

  confirmReservation(id: string, result: boolean){
    return this.http.put<any>(this.url + '/' + id + '/confirmation', {confirm: result})
  }

  deleteReservation(id: string){
    return this.http.delete<any>(this.url + '/' + id);
  }
}
