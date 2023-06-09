import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';

@Component({
  selector: 'app-explore-cards',
  templateUrl: './explore-cards.component.html',
  styleUrls: ['./explore-cards.component.scss']
})
export class ExploreCardsComponent {
  @Input() restaurante!: Restaurant;

  getImageURL(){
    let imageMedia = this.restaurante.restaurante_media.filter((media) => media.format != 'pdf');
    if(imageMedia.length == 0){
      return 'https://picsum.photos/id/395/300';
    }else{
      return `../../app/public/storage/uploads/user-${this.restaurante.user_id}/${imageMedia[0].filename}`;
    }
  }
}
