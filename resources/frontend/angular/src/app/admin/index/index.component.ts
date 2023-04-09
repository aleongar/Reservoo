import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private router: Router){}

  logOut(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
