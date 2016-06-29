import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {HeaderComponent} from './header.component';
import {TitleComponent} from './title.component';
import {FooterComponent} from './footer.component';


@Component({
  selector: 'App',
  templateUrl: 'app/home/main.html',
  directives : [ROUTER_DIRECTIVES, HeaderComponent, TitleComponent, FooterComponent]
})

export class HomeComponent {
  

  constructor() {
    
  }
}
