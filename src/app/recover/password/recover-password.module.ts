import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { RecoverPasswordComponent } from './recover-password.component';

@NgModule({
    declarations: [
        RecoverPasswordComponent
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
        RecoverPasswordComponent
    ]
})
export class RecoverPasswordModule {}