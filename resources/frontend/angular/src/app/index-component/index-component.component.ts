import { Component } from '@angular/core';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.scss']
})
export class IndexComponentComponent {
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
}
