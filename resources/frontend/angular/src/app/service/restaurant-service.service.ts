import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Restaurant } from '../interfaces/restaurant.inteface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  private url = 'http://127.0.0.1:8000/api/restaurants' //TODO: cambiar cuando tal

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url).pipe(
      map((res => res))
    );
  }

  getRestaurantById(id: string){
    return this.http.get<Restaurant>(this.url + '/' + id).pipe(
      map((response => response))
    );
  }

  postRestaurant(restaurantData: any){
    return this.http.post<any>(this.url, restaurantData);
  }
  postWithFiles(restaurantData: any){
    return this.http.post<any>(this.url + '/add', restaurantData);
  }

  putRestaurant(id: any, restaurantData: any){
    return this.http.put<Restaurant>(this.url + '/' + id, restaurantData).pipe(
      map((res) => res)
    );
  }

  putWithFiles(id: string, restaurantData: any){ //🔫🔫
    restaurantData.append('id', id);
    return this.http.post<any>(this.url + '/add', restaurantData).pipe(
      map((res) => res)
    );
  }

  deleteRestaurant(id: any){
    return this.http.delete<Restaurant>(this.url + '/' + id).pipe(
      map(res => res)
    );
  }

  removeImage(id: any){
    return this.http.delete<any>(this.url + '/removeImage/' + id).pipe(
      map(res => res)
    );
  }
}
