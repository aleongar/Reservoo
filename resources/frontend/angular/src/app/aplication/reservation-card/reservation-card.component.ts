import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation.interface';
import { ReservationsServiceService } from 'src/app/service/reservations-service.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent implements OnInit {

  constructor(private reservationService: ReservationsServiceService){}

  aprobarReserva(){
    this.reservationService.confirmReservation(this.reservation.id, true).subscribe((res) => {
      this.reservation.aprovada = true;
      $('#aprobarReserva'+this.reservation.id).attr('disabled', 'disabled');
      console.log(res);
    }); 
  }

  ngOnInit(): void {}

  @Input() reservation!: Reservation;
  @Input() canEdit: boolean = false;
}
