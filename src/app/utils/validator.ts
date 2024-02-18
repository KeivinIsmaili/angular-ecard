import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class Validator {

    isStringValidStrict(str) {
        let string = str.trim();
        return typeof string === 'string' && string !== '';
    }

    isValidEmail(email) {
        let emailTrim = email.trim();
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(emailTrim).toLowerCase());
    }

}