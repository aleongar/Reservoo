import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() restaurante!: Restaurant;

  
}
