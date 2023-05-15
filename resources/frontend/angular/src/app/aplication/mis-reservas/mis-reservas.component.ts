import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/interfaces/reservation.interface';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {

  constructor(private route: ActivatedRoute){}
  reservations: Reservation[] = [];
  canConfirm: boolean = false;

  ngOnInit(): void {
    this.route.data.subscribe(
      response => {
        this.reservations = response['reservations'];
        console.log(this.reservations);

      }
    );
    this.canConfirm = !!this.route.snapshot.paramMap.get('id');
    console.log(this.canConfirm);

  }

}
