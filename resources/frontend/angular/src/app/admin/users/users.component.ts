import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user.interface';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  editingId: string = '';
  userForm!: FormGroup;

  ngOnInit(){
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  constructor(private fb: FormBuilder, private modalService: NgbModal, private userService: UserServiceService){}

  open(content: any){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'});
  }

  closeModal(){
    this.editingId = '';
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      rol: ['', Validators.required]
    })
  }

  editUser(id: string){
    let user = this.users.find(user => user.id === id);
    this.editingId = String(id);
    this.userForm = this.fb.group({
      name: [user?.name, Validators.required],
      email: [user?.email, [Validators.required, Validators.email]],
      pass: ['', Validators.required],
      rol: [user?.rol, Validators.required]
    });
  }

  postUser(){
    this.userService.postUser(this.userForm.getRawValue()).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  putUser(){
    this.userService.putUser(this.editingId, this.userForm.getRawValue()).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
