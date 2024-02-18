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
  usernameValidator: boolean;
  passwordValidator: boolean;
  signinRequest: LoginRequest = {
    username: "",
    password: ""
  }

  constructor(private loginService: LoginService) { }

  onLogin() {
    this.usernameValidator = this.loginService.validate(this.signinRequest.username);
    this.passwordValidator = this.loginService.validate(this.signinRequest.password);

    if (this.usernameValidator && this.passwordValidator) {
      this.loginService.onLogIn(this.signinRequest);
    }
  }

}