import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-registro-ciente',
  templateUrl: './registro-ciente.component.html',
  styleUrls: ['./registro-ciente.component.scss']
})
export class RegistroCienteComponent implements OnInit{
  constructor(private router: Router, private userService: UserServiceService){

  }
  empresa: boolean = false;

  ngOnInit(): void {
      if(sessionStorage.getItem('restaurantRegistration') == 'true'){
        this.empresa = true;
        document.getElementById('info')!.innerText = '¡¡Estás registrandote como empresa!!';
        document.getElementById('info')!.classList.add('text-yellow-400');
        document.getElementById('info')!.style.display = 'block';
        sessionStorage.clear();
      }
  }

  protected registerData = {
    name: '',
    email: '',
    pass: '',
    confirm: ''
  }

  register(){
    document.getElementById('error')!.style.display = 'none';
    let sendData = {
      name: this.registerData.name,
      email: this.registerData.email,
      pass: this.registerData.pass,
      rol: this.empresa ? 3 : 2
    }
    if(this.registerData.pass != this.registerData.confirm){
      document.getElementById('error')!.innerText = 'Las contraseñas no coinciden';
      document.getElementById('error')!.style.display = 'block';
      return;
    }
    if(this.registerData.name == '' || this.registerData.email == '' || this.registerData.pass == '') {
      document.getElementById('error')!.innerText = 'Algún campo está vacío';
      document.getElementById('error')!.style.display = 'block';
      return;
    }
    this.userService.postUser(sendData).subscribe((res) => {
      this.router.navigate(['/login'], { queryParams: {registered: 'true'}});
    },
    (error) =>{
      document.getElementById('error')!.innerText = 'El correo ya está usado en otra cuenta';
      document.getElementById('error')!.style.display = 'block';
    });
  }
}
