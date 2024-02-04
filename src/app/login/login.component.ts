import { Component } from '@angular/core';
import { faLock, faUser, faArrowRight, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faUser = faUser;
  faLock = faLock;
  faArrowRight = faArrowRight;
}