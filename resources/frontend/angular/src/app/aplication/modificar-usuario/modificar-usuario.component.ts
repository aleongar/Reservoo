import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit{
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserServiceService){

  }

  pass: string = '';
  confirm: string = '';

  ngOnInit(): void {
    this.route.data.subscribe(
      response => {
        this.user = response['user'];
      }
    );
  }

  enviarFormulario(event: any){
    event.preventDefault();
    const formdata = {
      name: event.target.name.value,
      email: event.target.email.value,
      pass: event.target.password.value,
      rol: String(this.user.rol)
    };
    if(event.target.password.value != event.target.confirm.value){
      $('#error').text('Las contraseñas no coinciden');
    }

    this.userService.putUser(this.user.id, formdata).subscribe((res) => console.log(res));

  }

  verToken(){
    $('#token').val(localStorage.getItem('token') ?? '');
  }

  stringify(a: any){
    return a.toString();
  }
}
