import { Component } from '@angular/core';
import * as Aos from 'aos';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private title: Title) {
    this.title.setTitle('Login');
  }
  hide = true;
  ngOnInit() {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}
