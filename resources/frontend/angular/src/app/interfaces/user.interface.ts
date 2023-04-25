export class User{
 name: string;
 email: string;
 rol: number;
 id: string;

 constructor(name: string, email: string, rol: number, id: string) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.rol = rol;
 }
}
