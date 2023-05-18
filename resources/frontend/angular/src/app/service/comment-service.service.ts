import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comment } from '../interfaces/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  private url = 'http://reservoo.com/api/coments'

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
