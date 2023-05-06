import { Restaurant } from "./restaurant.inteface";
import { User } from "./user.interface";

export class Reservation{
  id: string;
  user: User;
  restaurante: Restaurant;
  h_reserva: Date;
  aprovada: boolean;

  constructor(id: string, user: User, restaurante: Restaurant, h_reserva: string, aprovada: boolean){
    this.id = id;
    this.user = user;
    this.restaurante = restaurante;
    this.h_reserva = new Date(h_reserva);
    this.aprovada = aprovada;
  }
}
