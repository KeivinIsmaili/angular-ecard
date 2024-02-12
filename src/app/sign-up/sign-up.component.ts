import { Component } from '@angular/core';
import { faLock, faUser, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SignupRequest } from '../models/signupRequest';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environment';
import { WS_CONSTANT } from '../utils/constant';

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
  value: string = '';
  signupRequest: SignupRequest = {
    username: "",
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  onSignup() {
    this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_SIGN_UP_URL), this.signupRequest).subscribe(
      (res: any) => {
        if (res) {
          this.toastr.success('Sign Up Successful!');
          let signinRequest = {
            username: this.signupRequest?.username,
            password: this.signupRequest?.password
          }
          this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_LOG_IN_URL), signinRequest).subscribe(
            (res: any) => {
              localStorage.setItem('loginToken', res.accessToken);
              this.router.navigateByUrl('/catalogue');
            },
          )
        }
      }
    )
  }
}
