import { Resenas } from "./resenas.interface";

export class Comment{
  content: string;
  resena: Resenas;

  constructor(resena: Resenas, content: string) {
    this.content = content;
    this.resena = resena;
  }
}
