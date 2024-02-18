import { Component } from '@angular/core';
import { faLock, faUser, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SignupRequest } from '../models/signupRequest';
import { SignupService } from './service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faArrowRight = faArrowRight;
  areFieldsValid: boolean = false;
  usernameValidator: boolean;
  firstNameValidator: boolean;
  lastNameValidator: boolean;
  emailValidator: boolean;
  passwordValidator: boolean;

  signupRequest: SignupRequest = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor( private signUpService: SignupService ) {}

  onSignup() {
    this.usernameValidator = this.signUpService.validate(this.signupRequest.username);
    this.firstNameValidator = this.signUpService.validate(this.signupRequest.firstName);
    this.lastNameValidator = this.signUpService.validate(this.signupRequest.lastName);
    this.passwordValidator = this.signUpService.validate(this.signupRequest.password);
    this.emailValidator = this.signUpService.validateEmail(this.signupRequest.email);

    if(this.usernameValidator && this.firstNameValidator && this.lastNameValidator &&
      this.passwordValidator && this.emailValidator) {
      this.signUpService.onSignUp(this.signupRequest);
    }
  }

}