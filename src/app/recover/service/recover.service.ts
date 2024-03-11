import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Validator } from "../../utils/validator";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { environment } from "../../../../environment";
import { WS_CONSTANT } from "../../utils/constant";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class RecoverService {

    constructor(
        private httpClient: HttpClient,
        private toastr: ToastrService,
        private validator: Validator,
        private router: Router,
    ) {}

    validateUsername(username: string) {
        return this.validator.isStringValidStrict(username);
    }

    validateMail(email: string) {
        return this.validator.isValidEmail(email);
    }

    recoverUsername(emailTo: string) {
        let params = new HttpParams().set('emailTo', emailTo);
        this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_FORGOT_USERNAME_END_POINT), null,  {params: params}).subscribe({
            next: (res: any) => {
                this.toastr.success(res.message);
                this.router.navigateByUrl('/login');
            },
            error: (error) => {
                this.toastr.error(error?.error?.message);
            }
        })
    }

    recoverPassword(username:string, emailTo: string) {
        let params = new HttpParams()
        .set('username', username)
        .set('emailTo', emailTo);
        this.httpClient.post(environment.WS_BASE_URL.concat(WS_CONSTANT.WS_FORGOT_PASSWORD_END_POINT), null,  {params: params}).subscribe({
            next: (res: any) => {
                this.toastr.success(res.message);
            },
            error: (error) => {
                this.toastr.error(error?.error?.message);
            }
        })
    }


}