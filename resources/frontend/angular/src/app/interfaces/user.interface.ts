import { Restaurant } from "./restaurant.inteface";

export class User{
 name: string;
 email: string;
 rol: number;
 id: string;
 restaurantes: Restaurant[] = [];

 constructor(name: string, email: string, rol: number, id: string, restaurantes: Restaurant[] = []) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.rol = rol;
  this.restaurantes = restaurantes;
 }
}
