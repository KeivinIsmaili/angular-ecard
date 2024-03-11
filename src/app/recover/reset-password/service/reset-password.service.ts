import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { HttpParams } from "@angular/common/http";
import { environment } from "../../../../../environment";
import { Validator } from "../../../utils/validator";
import { WS_CONSTANT } from "../../../utils/constant";

@Injectable({
    providedIn: 'root',
})
export class ResetPasswordService {

    constructor(
        private httpClient: HttpClient,
        private toastr: ToastrService,
        private validator: Validator,
        private router: Router,
    ) { }

    validatePassword(password: string) {
        return this.validator.isStringValidStrict(password);
    }

    passwordsMatch(newPassword: string, confirmPassword: string): boolean {
        return newPassword === confirmPassword ? true : false;
    }

    changePassword(newPassword: string, token: string, username: string) {
        let params = new HttpParams()
            .set('newPassword', newPassword)
            .set('token', token);
        this.httpClient.put(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_SECURITY_INFO_RESET_END_POINT), null, { params: params }).subscribe({
            next: (res: any) => {
                if (res) {
                    this.toastr.success(res.message);
                    let signinRequest = {
                        username: username,
                        password: newPassword
                    }
                    this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_LOG_IN_END_POINT), signinRequest).subscribe({
                        next: (response: any) => {
                            this.toastr.success('Login Successful!');
                            localStorage.setItem('loginToken', response.accessToken);
                            this.router.navigateByUrl('/catalogue');
                        },
                        error: (response) => {
                            this.toastr.error(response.error.error);
                        }
                    })
                }

            },
            error: (error) => {
                this.toastr.error(error?.error?.message);
            }
        })
    }

    passwordsDontMatch() {
        this.toastr.error("Passwords do not match!");
    }

}