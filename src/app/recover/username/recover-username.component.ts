import { Component } from '@angular/core';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

  recoverUsername() {
    this.emailValidator = this.recoverService.validateMail(this.email);

    if (this.emailValidator) {
      this.recoverService.recoverUsername(this.email);
    }
  }
}
