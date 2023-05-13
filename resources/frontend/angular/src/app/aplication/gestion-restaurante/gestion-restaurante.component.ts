import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';
import { RestaurantServiceService } from 'src/app/service/restaurant-service.service';

@Component({
  selector: 'app-gestion-restaurante',
  templateUrl: './gestion-restaurante.component.html',
  styleUrls: ['./gestion-restaurante.component.scss']
})
export class GestionRestauranteComponent implements OnInit{
  editing: boolean = false;
  constructor(private route: ActivatedRoute, private restaurantSevice: RestaurantServiceService){

  }
  cardUpload = false;
  restaurant!: Restaurant;


  ngOnInit(): void {
    if(this.route.snapshot.data['restaurante']){
      this.editing = true;
      this.route.data.subscribe(data => {
        this.restaurant = data['restaurante'];

      })
    }
    console.log(this.editing);
  }
  changeMethod(e: Event){
    this.cardUpload = $('input[name="online"]:checked').val() == 1;
  }

  filterImages(): Array<any>{
    return this.restaurant.restaurante_media.filter((media) => {return media.format != 'pdf'});
  }

  removeImage(id: string){
    this.restaurantSevice.removeImage(id);
  }

  sendRestaurante(event: any){
    event.preventDefault();
    if(this.editing){
      console.log('hola');

    }else{
      this.postRestaurant(event);
    }
  }

  getImage(media: any){
    return `../../storage/uploads/user-${this.restaurant.user_id}/${media.filename}`;
  }

  postRestaurant(event: any){
    const h_manana = `${event.target.h_m_1.value}-${event.target.h_m_2.value}`;
    const h_tarde = `${event.target.h_t_1.value}-${event.target.h_t_2.value}`;
    const fotos = event.target.multiple_files.files;
    const nombre = event.target.nombre.value;
    const direccion = event.target.direccion.value;
    const aforo = event.target.aforo.value;
    const descripcion = event.target.descripcion.value;
    const online = event.target.online.value;
    let carta;
    if(online == '1'){
      carta = event.target.carta.files[0];
    }else{
      carta = event.target.carta.value;
    }
    const formdata = new FormData();

    formdata.append('h_manana', h_manana);
    formdata.append('h_tarde', h_tarde);

    for (let i = 0; i < fotos.length; i++) {
      formdata.append(`foto${i}`, fotos[i]);
    }
    formdata.append(`cantidad_fotos`, fotos.length);

    formdata.append('nombre', nombre);
    formdata.append('direccion', direccion);
    formdata.append('aforo', aforo);
    formdata.append('descripcion', descripcion);
    formdata.append('online', online);
    formdata.append('carta', carta);
    formdata.append('user', localStorage.getItem('id') ?? '');

    this.restaurantSevice.postWithFiles(formdata).subscribe(
      (res) => {console.log(res);}
    );
  }
}
