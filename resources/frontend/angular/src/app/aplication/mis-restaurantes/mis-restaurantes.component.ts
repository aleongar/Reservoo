import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-mis-restaurantes',
  templateUrl: './mis-restaurantes.component.html',
  styleUrls: ['./mis-restaurantes.component.scss']
})
export class MisRestaurantesComponent implements OnInit {
  user!: User;

  ngOnInit(){
    this.resolver.data.subscribe(
      response => {
        this.user = response['user'];
        console.log(response['user']  );
      }
    );
  }

  constructor(private resolver: ActivatedRoute){}
}
