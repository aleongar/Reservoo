import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private http: HttpClient, private router: Router) { }

  public ADMIN = '1';
  public CLIENTE = '2';
  public EMPRESA = '3';
  private url = 'http://127.0.0.1:8000' //TODO: Cambiar cuando se pase a produccion

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    let request = req;
    if(token){
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) =>{
        if(err.status === 401){
          this.router.navigate(['/login']);
        }

        return throwError(err);
      })
    );
  }

  retrieveToken(email: string, password: string){
    return this.http.post<any>(this.url+"/api/login", {email: email, pass: password})
    .pipe(
      map((res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        if(res.rol !== this.ADMIN){
          localStorage.setItem('id', res.id);
        }
      })
    )
  }
}
