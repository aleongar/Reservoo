import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.scss']
})
export class GestionUsuarioComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router){
    this.router.navigate(['modificarUsuario']);
  }
  user!: User;

  ngOnInit(): void {
    this.route.data.subscribe(
      response => {
        this.user = response['user'];

      }
    );
  }
}
