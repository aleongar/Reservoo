import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router){}

  protected toggleCollapse(){
    let button = document.getElementById('collapse-button');
    let expanded = button?.getAttribute('aria-expanded');
    if(expanded == 'false'){
        document.getElementById("nav-content")?.classList.add("flex");
        document.getElementById("nav-content")?.classList.remove("hidden");
    }else{
        document.getElementById("nav-content")?.classList.remove("flex");
        document.getElementById("nav-content")?.classList.add("hidden");
    }
    button?.setAttribute('aria-expanded', expanded == 'false' ? 'true' : 'false')
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != undefined
  }

  logOut(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

  isRestaurant(){
    return localStorage.getItem('rol') == '3';
  }
}
