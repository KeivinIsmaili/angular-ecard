import { Component } from '@angular/core';
import { faLock, faUser, faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from '../models/loginRequest';
import { LoginService } from './service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faUser = faUser;
  faLock = faLock;
  faArrowRight = faArrowRight;
  areFieldsValid: boolean = false;
  signinRequest: LoginRequest = {
    username: "",
    password: ""
  }

  constructor(private loginService: LoginService) { }

  onLogin() {
    this.areFieldsValid = this.loginService.checkConditions(this.signinRequest);
    if (this.areFieldsValid) {
      this.loginService.onLogIn(this.signinRequest);
    }
  }

}