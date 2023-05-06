import { transition, trigger } from '@angular/animations';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from 'src/app/interfaces/reservation.interface';
import { ReservationsServiceService } from 'src/app/service/reservations-service.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit{
  reservations: Reservation[] = [];
  editingId: string = '';
  userForm!: FormGroup;
  minDate: Date = new Date();

  ngOnInit(){
    this.reservationService.getReservations().subscribe((res)=>{
      this.reservations = res;
    });
    this.userForm = this.fb.group({
      user: ['', Validators.required],
      restaurant: ['', Validators.required],
      date: [Validators.required],
      hour: ['' ,Validators.required],
      min: [Validators.required],
      aproved: [false, Validators.required]
    })
  }

  log(something: any){
    console.log("log")
  }

  constructor(private fb: FormBuilder, private modalService: NgbModal, private reservationService: ReservationsServiceService){}

  open(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'});
  }

  closeModal(){
    this.editingId = '';
    this.userForm = this.fb.group({
      user: ['', Validators.required],
      restaurant: ['', Validators.required],
      date: [Validators.required],
      hour: ['' ,Validators.required],
      min: [Validators.required],
      aproved: [false, Validators.required]
    })
  }

  confirmReservation(id: string, actualValue: boolean){
    this.reservationService.confirmReservation(id, !actualValue).subscribe((res) => {
      console.log(res);
    });
  }

  edit(id: string){
    let reservation = this.reservations.find(reservation => reservation.id === id);
    this.editingId = String(id);
    let date = new Date(String(reservation?.h_reserva));
    console.log(date, reservation?.h_reserva);
    this.userForm = this.fb.group({
      user: [reservation?.user.id, Validators.required],
      restaurant: [reservation?.restaurante.id, Validators.required],
      date: [formatDate(date, 'yyyy-MM-dd', 'en') ,Validators.required],
      hour: [date.getHours() ,Validators.required],
      min: [date.getMinutes() ,Validators.required],
      aproved: [reservation?.aprovada, Validators.required]
    })
  }

  postReservation(){
    let h_reserva = this.userForm.get('date')?.value + ' ' + this.userForm.get('hour')?.value + ':' + this.userForm.get('min')?.value + ':00';
    let sendData = {
      user: this.userForm.get('user')?.value,
      restaurant: this.userForm.get('restaurant')?.value,
      h_reserva: h_reserva,
      aprovado: this.userForm.get('aproved')?.value
    }
    this.reservationService.postReservation(sendData).subscribe((res) => {
      window.location.reload();
    });
  }

  putReservation(){
    let h_reserva = this.userForm.get('date')?.value + ' ' + this.userForm.get('hour')?.value + ':' + this.userForm.get('min')?.value + ':00';
    let sendData = {
      user: this.userForm.get('user')?.value,
      restaurant: this.userForm.get('restaurant')?.value,
      h_reserva: h_reserva,
      aprovado: this.userForm.get('aproved')?.value
    }
    this.reservationService.putReservation(this.editingId, sendData).subscribe((res) => {
      window.location.reload();
    });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe((res) => {
      window.location.reload();
    });
  }
}
