import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';
import { ReservationsServiceService } from 'src/app/service/reservations-service.service';
import { ResenasServiceService } from 'src/app/service/resenas-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurante!: Restaurant;
  constructor(private rederer: Renderer2, private route: ActivatedRoute, private reservaService: ReservationsServiceService, private resenaService: ResenasServiceService){}
  imageMedia: any[] = [];
  menuReserva = false;
  openCommentMenu = false;
  resenaValue: number = 0;

  getPdf(){
    let pdf = this.restaurante.restaurante_media.filter((media) => {return media.format == 'pdf'})[0];
    if(pdf){
      if(pdf.online){
        return pdf.filename;
      }else{
        return `../../storage/uploads/user-${this.restaurante.user_id}/${pdf.filename}`
      }
    }
    return false;
  }

  getImage(media: any){
    return `../../app/public/storage/uploads/user-${this.restaurante.user_id}/${media.filename}`;;
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      response => {
        this.restaurante = response['restaurant'];
        this.imageMedia = this.restaurante.restaurante_media.filter((media) => media.format != 'pdf');
      }
    );
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null && localStorage.getItem('token') != undefined;
  }

  numericArray(number: number){
    return Array.from(Array(number).keys())
  }

  sendReserva(event: any){
    event.preventDefault();
    let date = event.target.reserva.value.replace('T', ' ');
    console.log(date);
    let send = {
      h_reserva: date,
      user: localStorage.getItem('id') ?? '',
      restaurant: this.route.snapshot.paramMap.get('id')
    }
    $('#buttonsend').attr('disabled', 'disabled');
    this.reservaService.postReservation(send).subscribe((res)=>{
      $('#info').text('Reserva enviada');
    }, (error) => {
      $('#info').text('No se ha podido reservar');
      console.log(error);

      $('#buttonsend').removeAttr('disabled');
    })
  }

  enviarComentario(event: any){
    event.preventDefault();
    let sendData = {
      calificacion: this.resenaValue,
      contenido: $('#opinion').val(),
      user: localStorage.getItem('id'),
      restaurante: this.restaurante.id
    }
    this.resenaService.postResena(sendData).subscribe(() => {
      console.log('mandao');
      window.location.reload();
    });
  }
}
