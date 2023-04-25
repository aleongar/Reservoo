import { User } from "./user.interface";

export class Restaurant{
  id: string;
  nombre: string;
  descripcion: string;
  aforo: number;
  h_manana: string;
  h_tarde: string;
  direccion: string;
  user: User;


  constructor(id: string, nombre: string, descripcion: string, aforo: number, h_manana: string, h_tarde: string, direccion: string, user: User) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.aforo = aforo;
    this.h_manana = h_manana;
    this.h_tarde = h_tarde;
    this.direccion = direccion;
    this.user = user;
  }
}
