import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-restaurante',
  templateUrl: './gestion-restaurante.component.html',
  styleUrls: ['./gestion-restaurante.component.scss']
})
export class GestionRestauranteComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  cardUpload = false;


  ngOnInit(): void {
    if(this.route.snapshot.data['restaurante']){

    }
  }
  changeMethod(e: Event){
    this.cardUpload = $('input[name="online"]:checked').val() == 1;
  }
}
