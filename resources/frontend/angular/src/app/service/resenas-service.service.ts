import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resenas } from '../interfaces/resenas.interface';

@Injectable({
  providedIn: 'root'
})
export class ResenasServiceService {

  private url = 'http://reservoo.com/api/resenas' //TODO: cambiar cuando tal

  constructor(private http: HttpClient) { }

  getResenas(): Observable<Resenas[]> {
    return this.http.get<Resenas[]>(this.url).pipe(
      map((res => res))
    );
  }

  postResena(userData: any){
    return this.http.post<any>(this.url, userData);
  }

  putResena(id: string, userData: any){
    return this.http.put<any>(this.url+'/'+id, userData);
  }

  deleteResena(id: string){
    return this.http.delete<any>(this.url+'/'+id);
  }
}
