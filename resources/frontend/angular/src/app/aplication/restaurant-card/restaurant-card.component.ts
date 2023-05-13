import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent {
  @Input() restaurante!: Restaurant;

  getImageURL(){
    if(this.restaurante.restaurante_media.length == 0){
      return 'https://picsum.photos/id/395/300';
    }else{
      return `../../storage/uploads/user-${this.restaurante.user_id}/${this.restaurante.restaurante_media[0].filename}`;
    }
  }
}
