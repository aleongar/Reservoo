import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';
import { RestaurantServiceService } from 'src/app/service/restaurant-service.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  constructor(private route: ActivatedRoute, private restauranteService: RestaurantServiceService){
    let loadMore = () => this.loadMore();
    $(window).scroll(function() {
      if($(window).scrollTop()! + $(window).height()! == $(document).height()) {
        loadMore();
      }
    });
  }
  restaurants!: Restaurant[];
  page: number = 1;
  canLoadMore: boolean = true;
  nameSearching = '';
  isSearching = false;

  ngOnInit(){
    this.route.data.subscribe(
      response => {
        this.restaurants = response['restaurants'];
        console.log(this.restaurants);

      }
    );
  }


  loadMore(){
    this.page++;
    if(this.isSearching){
      this.restauranteService.searchRestaurantsPaginated(this.nameSearching, this.page).subscribe((res)=>{
        res.forEach((restaurant) => {
          this.restaurants.push(restaurant);
        })
      });
    }else{
      this.restauranteService.getRestaurantsPaginated(this.page).subscribe((res)=>{
        res.forEach((restaurant) => {
          this.restaurants.push(restaurant);
        })
      });
    }
    this.canLoadMore = this.restaurants.length >= 10*this.page;
  }

  search(event: any){
    event.preventDefault();
    this.nameSearching = event.target.name.value;
    this.page = 1;
    this.isSearching = true;
    this.restauranteService.searchRestaurantsPaginated(this.nameSearching, this.page).subscribe((res)=>{
      this.restaurants = res;
    });
  }
}
