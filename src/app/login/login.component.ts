import { Component } from '@angular/core';
import { faLock, faUser, faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from '../models/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WS_CONSTANT } from '../utils/constant';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faUser = faUser;
  faLock = faLock;
  faArrowRight = faArrowRight;
  signinRequest: LoginRequest = {
    username: "",
    password: ""
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}
  
  onLogin() {
    this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_LOG_IN_URL), this.signinRequest).subscribe(
      (res: any) => {
        this.toastr.success('Login Successful!');
        localStorage.setItem('loginToken', res.accessToken);
        this.router.navigateByUrl('/catalogue');
      },
      (error) => {
        this.toastr.error('Bad credentials!');
      }
    )
  }
}