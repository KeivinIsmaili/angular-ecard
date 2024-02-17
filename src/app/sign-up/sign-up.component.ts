import { Component, ElementRef, ViewChild } from '@angular/core';
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
  signupRequest: SignupRequest = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor( private signUpService: SignupService ) {}

  onSignup() {
    this.areFieldsValid = this.signUpService.checkConditions(this.signupRequest);
    if(this.areFieldsValid) {
      this.signUpService.onSignUp(this.signupRequest);
    }
  }

}