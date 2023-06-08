import { Resenas } from "./resenas.interface";
import { User } from "./user.interface";

export class Restaurant{
  id: string;
  nombre: string;
  descripcion: string;
  aforo: number;
  h_manana: string;
  h_tarde: string;
  direccion: string;
  user_id: string;
  user: User;
  restaurante_media: any[];
  resenas: Resenas[] = [];


  constructor(id: string, nombre: string, user_id: string, descripcion: string, aforo: number, h_manana: string, h_tarde: string, direccion: string, user: User, restaurante_media: any[], resenas: Resenas[]) {
    this.id = id;
    this.nombre = nombre;
    this.user_id = user_id;
    this.descripcion = descripcion;
    this.aforo = aforo;
    this.h_manana = h_manana;
    this.h_tarde = h_tarde;
    this.direccion = direccion;
    this.user = user;
    this.restaurante_media = restaurante_media;
    this.resenas = resenas;
  }
}
