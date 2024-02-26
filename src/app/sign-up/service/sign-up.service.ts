import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Validator } from "../../utils/validator";
import { SignupRequest } from "../../models/signupRequest";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../environment";
import { WS_CONSTANT } from "../../utils/constant";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class SignupService {

    constructor(
        private httpClient: HttpClient,
        private toastr: ToastrService,
        private validator: Validator,
        private router: Router
    ) {}

    validate(username: string) {
        return this.validator.isStringValidStrict(username);
    }
    
    validateEmail(email: string) {
        return this.validator.isValidEmail(email);
    }

    onSignUp(signupRequest: SignupRequest) {
        this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_SIGN_UP_END_POINT), signupRequest).subscribe({
            next: (res: any) => {
                if (res) {
                    this.toastr.success('Sign Up Successful!');
                    let signinRequest = {
                        username: signupRequest?.username,
                        password: signupRequest?.password
                    }
                    this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_LOG_IN_END_POINT), signinRequest).subscribe(
                        (res: any) => {
                            localStorage.setItem('loginToken', res.accessToken);
                            this.router.navigateByUrl('/catalogue');
                        },
                    )
                }
            },
            error: (error) => {
                this.toastr.error(error.error.message);
            }
        })
    }

}