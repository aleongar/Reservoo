import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private router: Router){
    if(sessionStorage.getItem('reloadneeded') == 'true'){
      sessionStorage.setItem('reloadneeded', 'false');
      window.location.reload();
    }
  }

  logOut(){
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.setItem('reloadneeded', 'true');
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
