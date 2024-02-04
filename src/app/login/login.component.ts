import { Component } from '@angular/core';
import { faLock, faUser, faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { LoginRequest } from '../models/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WS_CONSTANT } from '../utils/constant';
import { ToastrService } from 'ngx-toastr';

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
  isUsernameFieldFilled: boolean = false;
  isPasswordFieldFilled: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onUsernameInputFilled(event){
    if(event.target.value) {
      this.isUsernameFieldFilled = true;
    }
  }

  onPasswordInputFilled(event){
    if(event.target.value) {
      this.isPasswordFieldFilled = true;
    }
  }

  onLogin() {
    console.log(this.isPasswordFieldFilled);
    console.log(this.isUsernameFieldFilled);
    let path: string = "authenticate/signin";
    this.httpClient.post(WS_CONSTANT.WS_BASE_URL.concat(path), this.signinRequest).subscribe(
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