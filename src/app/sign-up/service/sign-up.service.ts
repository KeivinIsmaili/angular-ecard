import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { switchMap } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class SignupService {
    constructor(private http: HttpClient) { }

    makeSequentialPostCalls(firstCallUrl: string, firstCallBody: any, secondCallUrl: string, secondCallBody: any) {
        return this.http.post(firstCallUrl, firstCallBody).pipe(
            switchMap((firstCallResult: any) => {
                return this.http.post(secondCallUrl, secondCallBody);
            })
        );
    }

}