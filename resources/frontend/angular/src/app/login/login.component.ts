import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthInterceptorService } from '../service/auth/auth-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private loginService: AuthInterceptorService, private route: ActivatedRoute){
    if(sessionStorage.getItem('reloadneeded') == 'true'){
      sessionStorage.setItem('reloadneeded', 'false');
      window.location.reload();
    }
  }

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      if(params['registered'] == 'true'){
        document.getElementById('info')!.innerText = 'Registrado correctamente';
        document.getElementById('info')!.classList.add('text-blue-300');
        document.getElementById('info')!.style.display = 'block';
      }
    })
  }
  protected loginData = {
    email: '',
    password: ''
  }

  logIn(){
    document.getElementById('info')!.style.display = 'none';
    this.loginService.retrieveToken(this.loginData?.email, this.loginData?.password).subscribe(
    (token) => {
      console.log(localStorage.getItem('rol'));
      if(localStorage.getItem('rol') == this.loginService.ADMIN){
        this.router.navigate(['/admin/users']);
        sessionStorage.setItem('reloadneeded', 'true');
      }
      if(localStorage.getItem('rol') === this.loginService.EMPRESA){
        this.router.navigate(['/app/misRestaurantes']);
      }
    },
    (error) => {
      if(error.status == 401){
        document.getElementById('info')!.innerText = 'Credenciales incorrectas';
        document.getElementById('info')!.classList.add('text-red-600');
        document.getElementById('info')!.style.display = 'block';
      }else{
        document.getElementById('info')!.innerText = 'No se ha podido iniciar sesión';
        document.getElementById('info')!.classList.add('text-red-600');
        document.getElementById('info')!.style.display = 'block';
      }
    });

  }
}
