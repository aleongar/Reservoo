import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reservoo';
  constructor(){
    if(sessionStorage.getItem('reloadneeded') == 'true'){
      sessionStorage.setItem('reloadneeded', 'false');
      window.location.reload();
    }
  }
}
