import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptorService } from '../service/auth/auth-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private loginService: AuthInterceptorService){}
  protected loginData = {
    email: '',
    password: ''
  }

  logIn(){
    this.loginService.retrieveToken(this.loginData?.email, this.loginData?.password).subscribe((token) => {
      console.log(localStorage.getItem('rol'));
      if(localStorage.getItem('rol') === '1'){
        this.router.navigate(['/admin/users']);
      }
    });
    console.log(this.loginData);
  }
}
