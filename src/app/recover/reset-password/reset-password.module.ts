import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
    declarations: [
        ResetPasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        FontAwesomeModule,
        ToastrModule
    ],
    providers: [],
    exports: [
      ResetPasswordComponent
    ]
})
export class ResetPasswordModule {}