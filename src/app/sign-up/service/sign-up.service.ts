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

    checkConditions(signupRequest: SignupRequest) {
        const { username, firstName, lastName, email, password } = signupRequest;

        const isAllValid = (
            this.validator.isStringValidStrict(username) &&
            this.validator.isStringValidStrict(firstName) &&
            this.validator.isStringValidStrict(lastName) &&
            this.validator.isValidEmail(email) &&
            this.validator.isStringValidStrict(password)
        );

        return isAllValid;
    }

    onSignUp(signupRequest: SignupRequest) {
        this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_SIGN_UP_URL), signupRequest).subscribe(
            (res: any) => {
                if (res) {
                    this.toastr.success('Sign Up Successful!');
                    let signinRequest = {
                        username: signupRequest?.username,
                        password: signupRequest?.password
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