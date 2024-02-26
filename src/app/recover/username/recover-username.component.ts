import { Component } from '@angular/core';
import { faEnvelope, faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from '../../models/loginRequest';
import { LoginService } from '../../login/service/login.service';
import { RecoverService } from '../service/recover.service';

@Component({
  selector: 'app-recover-username',
  templateUrl: './recover-username.component.html',
  styleUrl: './recover-username.component.scss'
})
export class RecoverUsernameComponent {
  faEnvelope = faEnvelope;
  faArrowRight = faArrowRight;
  email: string = '';
  emailValidator: boolean;

  constructor(private recoverService: RecoverService) {}

  onEmailSubmit() {
    this.emailValidator = this.recoverService.validateMail(this.email);

    if (this.emailValidator) {
      this.recoverService.onEmailSubmit(this.email);
    }
  }
}
