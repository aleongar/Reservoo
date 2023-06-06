import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = API_URL + 'api/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      map((res => res))
    );
  }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(this.url + '/' + id).pipe(
      map((res => res))
    );
  }

  getEmpresasUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/emp').pipe(
      map((res => res))
    );
  }

  postUser(userData: any){
    return this.http.post<any>(this.url, {name: userData.name, email: userData.email, pass: userData.pass, rol: userData.rol});
  }

  putUser(id: string, userData: any){
    return this.http.put<any>(this.url + '/' + id, {name: userData.name, email: userData.email, pass: userData.pass, rol: userData.rol});
  }

  deleteUser(id: string){
    return this.http.delete(this.url + '/' + id);
  }

  getUserWithRestaurantsIDs(id: string){
    return this.http.get<User>(this.url + '/rest/' + id).pipe(
      map((res => res))
    );
  }
}
