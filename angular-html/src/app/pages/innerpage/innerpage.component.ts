import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';

@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.scss'],
})
export class InnerpageComponent {
  constructor(private title: Title) {
    this.title.setTitle('Innerpage');
  }
  hide = true;
  hide2 = true;
  ngOnInit() {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
      disableMutationObserver: false,
    });
  }
}
