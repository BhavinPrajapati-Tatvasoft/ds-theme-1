import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  ngOnInit() {
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine',
      once: true,
    });
  }
  removeMenu() {
    document.body.classList.remove('open-menu');
  }
}
