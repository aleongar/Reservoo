import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comment } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private url = API_URL + 'api/coments'

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url).pipe(
      map((res => res))
    );
  }

  postComment(userData: any){
    return this.http.post(this.url, userData).pipe(
      map((res => res))
    );
  }

  putComment(id: string, userData: any){
    return this.http.put(this.url+'/'+id, userData).pipe(
      map((res => res))
    );
  }

  deleteComment(id: string){

    return this.http.delete(this.url+'/'+id);
  }
}
