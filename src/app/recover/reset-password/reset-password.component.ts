import { Component, OnInit } from '@angular/core';
import { faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ResetPasswordService } from './service/reset-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  
  faLock = faLock;
  faArrowRight = faArrowRight;
  newPassword: string = '';
  confirmPassword: string = '';
  newPasswordValidator: boolean;
  confirmPasswordValidator: boolean;
  passwordsMatch: boolean;
  token: string;

  constructor(
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  changePassword() {
    this.newPasswordValidator = this.resetPasswordService.validatePassword(this.newPassword);
    this.confirmPasswordValidator = this.resetPasswordService.validatePassword(this.confirmPassword);
    this.passwordsMatch = this.resetPasswordService.passwordsMatch(this.newPassword, this.confirmPassword);
    if(this.passwordsMatch) {
      this.resetPasswordService.changePassword(this.newPassword, this.token);
    } else {
      this.resetPasswordService.passwordsDontMatch();
    }

  }

}