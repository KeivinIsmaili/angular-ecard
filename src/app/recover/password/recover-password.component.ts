import { Component } from '@angular/core';
import { faEnvelope, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { RecoverService } from '../service/recover.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent {
  
  faEnvelope = faEnvelope;
  faUser = faUser;
  faArrowRight = faArrowRight;
  email: string = '';
  username: string = '';
  emailValidator: boolean;
  usernameValidator: boolean;

  constructor(private recoverService: RecoverService) {}

  recoverPassword() {
    this.usernameValidator = this.recoverService.validateUsername(this.username);
    this.emailValidator = this.recoverService.validateMail(this.email);

    if (this.usernameValidator && this.emailValidator) {
      this.recoverService.recoverPassword(this.username, this.email);
    }
  }
}
