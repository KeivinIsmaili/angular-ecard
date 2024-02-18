import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Validator } from "../../utils/validator";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../environment";
import { WS_CONSTANT } from "../../utils/constant";
import { Router } from "@angular/router";
import { LoginRequest } from "../../models/loginRequest";

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor(
        private httpClient: HttpClient,
        private toastr: ToastrService,
        private validator: Validator,
        private router: Router
    ) {}

    validate(username: string) {
        return this.validator.isStringValidStrict(username);
    }

    onLogIn(loginRequest: LoginRequest) {
        this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_LOG_IN_URL), loginRequest).subscribe(
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