import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';
import { RestaurantServiceService } from 'src/app/service/restaurant-service.service';

@Component({
  selector: 'app-gestion-restaurante',
  templateUrl: './gestion-restaurante.component.html',
  styleUrls: ['./gestion-restaurante.component.scss']
})
export class GestionRestauranteComponent implements OnInit{
  editing: boolean = false;
  constructor(private route: ActivatedRoute, private restaurantSevice: RestaurantServiceService, private router: Router){

  }
  cardUpload = false;
  restaurant!: Restaurant;
  imageArray: any[] = [];
  mostrarLink = false;
  iframeLink = '';
  copiao = false;

  ngOnInit(): void {
    if(this.route.snapshot.data['restaurante']){
      this.editing = true;
      this.route.data.subscribe(data => {
        this.restaurant = data['restaurante'];
        this.preloadData();
      })
    }
    console.log(this.editing);
  }

  preloadData(){
    this.imageArray = this.filterImages();
    let rest = this.restaurant; //abreviate variable
    let [h_m_1, h_m_2] = rest.h_manana.split('-');
    let [h_t_1, h_t_2] = rest.h_tarde.split('-');

    $('#h_m_1').val(h_m_1);
    $('#h_t_1').val(h_t_1);
    $('#h_m_2').val(h_m_2);
    $('#h_t_2').val(h_t_2);

    $('#nombre').val(String(rest.nombre));
    $('#direccion').val(String(rest.direccion));
    $('#descripcion').val(String(rest.descripcion));
    $('#aforo').val(String(rest.aforo));
    if(!rest.restaurante_media.filter((media)=>{return media.format == 'pdf'})[0].online){
      $('#carta').val(rest.restaurante_media.filter((media)=>{return media.format == 'pdf'})[0].filename);
    }
  }

  setIframeLink(){
    let link = location.origin + '/iframe/' + this.restaurant.id;
    console.log(link);
    this.iframeLink = `<iframe src="${link}" frameborder="0" scrolling="no" width="100px" height="100px">`;
  }

  changeMethod(e: Event){
    this.cardUpload = $('input[name="online"]:checked').val() == 1;
  }

  filterImages(): Array<any>{
    return this.restaurant.restaurante_media.filter((media) => {return media.format != 'pdf'});
  }

  removeImage(id: string){
    this.restaurantSevice.removeImage(id).subscribe(
      (res) =>{
        if(res.result == 'success'){
          let imageIndex = this.imageArray.findIndex((image) => image.id == id)
          if(imageIndex > -1){
            this.imageArray.splice(imageIndex, 1);
          }
        }
      }
    );

  }

  copyToClipboard(){
    navigator.clipboard.writeText(this.iframeLink)
    .then(() => {
      this.copiao = true;
    });
  }

  sendRestaurante(event: any){
    event.preventDefault();
    if(this.editing){
      this.putRestaurant(event);

    }else{
      this.postRestaurant(event);
    }
  }

  getImage(media: any){
    return `../../storage/uploads/user-${this.restaurant.user_id}/${media.filename}`;
  }

  prepareData(event: any){
    const h_manana = String(`${event.target.h_m_1.value}-${event.target.h_m_2.value}`);
    const h_tarde = String(`${event.target.h_t_1.value}-${event.target.h_t_2.value}`);
    const fotos = event.target.multiple_files.files;
    const nombre = String(event.target.nombre.value);
    const direccion = String(event.target.direccion.value);
    const aforo = String(event.target.aforo.value);
    const descripcion = String(event.target.descripcion.value);
    const online = String(event.target.online.value);
    let carta;
    if(online == '1'){
      carta = event.target.carta.files[0];
    }else{
      carta = String(event.target.carta.value);
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
    return formdata;
  }

  postRestaurant(event: any){
    this.restaurantSevice.postWithFiles(this.prepareData(event)).subscribe(
      (res) => {console.log(res); this.router.navigate(['app/misRestaurantes']);}
    );
  }

  putRestaurant(event: any){
    this.restaurantSevice.putWithFiles(this.restaurant.id, this.prepareData(event)).subscribe(
      (res) => {console.log(res);this.router.navigate(['app/misRestaurantes']);}
    );
  }
}
