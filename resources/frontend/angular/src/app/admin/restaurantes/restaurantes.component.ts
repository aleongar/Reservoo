import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/interfaces/restaurant.inteface';
import { User } from 'src/app/interfaces/user.interface';
import { RestaurantServiceService } from 'src/app/service/restaurant-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';


@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent {
  restaurantes: Restaurant[] = [];
  editingId: string = '';
  userForm!: FormGroup;
  usuariosEmpresarios: User[] = []

  ngOnInit(){
    this.restaurantService.getRestaurants().subscribe((res) => {
      this.restaurantes = res;
    });
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      aforo: ['', [Validators.required, Validators.min(4)]],
      h_manana1_1: ['', Validators.required],
      h_manana1_2: ['', Validators.required],
      h_manana2_1: ['', Validators.required],
      h_manana2_2: ['', Validators.required],
      h_tarde1_1: ['', Validators.required],
      h_tarde1_2: ['', Validators.required],
      h_tarde2_1: ['', Validators.required],
      h_tarde2_2: ['', Validators.required],
      direccion: ['', Validators.required],
      idUsuario: ['', Validators.required],
    })
    this.userService.getEmpresasUsers().subscribe((res)=>{
      this.usuariosEmpresarios = res;
    })
  }

  constructor(private fb: FormBuilder, private modalService: NgbModal, private restaurantService: RestaurantServiceService, private userService: UserServiceService){}

  open(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'});
  }

  closeModal(){
    this.editingId = '';
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      aforo: ['', [Validators.required, Validators.min(4)]],
      h_manana1_1: ['', Validators.required],
      h_manana1_2: ['', Validators.required],
      h_manana2_1: ['', Validators.required],
      h_manana2_2: ['', Validators.required],
      h_tarde1_1: ['', Validators.required],
      h_tarde1_2: ['', Validators.required],
      h_tarde2_1: ['', Validators.required],
      h_tarde2_2: ['', Validators.required],
      direccion: ['', Validators.required],
      idUsuario: ['', Validators.required],
    })
  }
  log(element: any){
    console.log(element);
  }

  editRestaurant(id: string){
    let restaurant = this.restaurantes.find(user => user.id === id);
    this.editingId = String(id);
    let h_manana1_1 = restaurant?.h_manana.split('-')[0].split(':')[0];
    let h_manana1_2 = restaurant?.h_manana.split('-')[0].split(':')[1];
    let h_manana2_1 = restaurant?.h_manana.split('-')[1].split(':')[0];
    let h_manana2_2 = restaurant?.h_manana.split('-')[1].split(':')[1];
    let h_tarde1_1 = restaurant?.h_tarde.split('-')[0].split(':')[0];
    let h_tarde1_2 = restaurant?.h_tarde.split('-')[0].split(':')[1];
    let h_tarde2_1 = restaurant?.h_tarde.split('-')[1].split(':')[0];
    let h_tarde2_2 = restaurant?.h_tarde.split('-')[1].split(':')[1];
    this.userForm = this.fb.group({
      nombre: [restaurant?.nombre, Validators.required],
      descripcion: [restaurant?.descripcion, Validators.required],
      aforo: [restaurant?.aforo, [Validators.required, Validators.min(4)]],
      h_manana1_1: [h_manana1_1, Validators.required],
      h_manana1_2: [h_manana1_2, Validators.required],
      h_manana2_1: [h_manana2_1, Validators.required],
      h_manana2_2: [h_manana2_2, Validators.required],
      h_tarde1_1: [h_tarde1_1, Validators.required],
      h_tarde1_2: [h_tarde1_2, Validators.required],
      h_tarde2_1: [h_tarde2_1, Validators.required],
      h_tarde2_2: [h_tarde2_1, Validators.required],
      direccion: [restaurant?.direccion, Validators.required],
      idUsuario: [restaurant?.user.id, Validators.required],
    });
  }

  postRestaurant(){
    let h_manana = `${this.userForm.get('h_manana1_1')?.value}:${this.userForm.get('h_manana1_2')?.value}-${this.userForm.get('h_manana2_1')?.value}:${this.userForm.get('h_manana2_2')?.value}`;
    let h_tarde = `${this.userForm.get('h_tarde1_1')?.value}:${this.userForm.get('h_tarde1_2')?.value}-${this.userForm.get('h_tarde2_1')?.value}:${this.userForm.get('h_tarde2_2')?.value}`;
    let data = {
      nombre: this.userForm.get('nombre')?.value,
      descripcion: this.userForm.get('descripcion')?.value,
      aforo: this.userForm.get('aforo')?.value,
      h_manana: h_manana,
      h_tarde: h_tarde,
      direccion: this.userForm.get('direccion')?.value,
      user: this.userForm.get('idUsuario')?.value
    };
    this.restaurantService.postRestaurant(data).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  putRestaurant(){
    let h_manana = `${this.userForm.get('h_manana1_1')?.value}:${this.userForm.get('h_manana1_2')?.value}-${this.userForm.get('h_manana2_1')?.value}:${this.userForm.get('h_manana2_2')?.value}`;
    let h_tarde = `${this.userForm.get('h_tarde1_1')?.value}:${this.userForm.get('h_tarde1_2')?.value}-${this.userForm.get('h_tarde2_1')?.value}:${this.userForm.get('h_tarde2_2')?.value}`;
    let data = {
      nombre: this.userForm.get('nombre')?.value,
      descripcion: this.userForm.get('descripcion')?.value,
      aforo: this.userForm.get('aforo')?.value,
      h_manana: h_manana,
      h_tarde: h_tarde,
      direccion: this.userForm.get('direccion')?.value,
      user: this.userForm.get('idUsuario')?.value
    };
    this.restaurantService.putRestaurant(this.editingId, data).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  deleteRestaurant(id: string){
    this.restaurantService.deleteRestaurant(id).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
