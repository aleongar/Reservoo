import { Restaurant } from "./restaurant.inteface";
import { User } from "./user.interface";

export class Resenas{
  id: string;
  calificacion: number;
  contenido: string = '';
  user: User;
  restaurante: Restaurant;

  constructor(id: string, calificacion: number, contenido: string, user: User, restaurante: Restaurant){
    this.id = id;
    this.calificacion = calificacion;
    this.contenido = contenido;
    this.user = user;
    this.restaurante = restaurante;
  }
}
