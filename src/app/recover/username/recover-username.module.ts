import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { RecoverUsernameComponent } from './recover-username.component';

@NgModule({
    declarations: [
        RecoverUsernameComponent
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
        RecoverUsernameComponent
    ]
})
export class RecoverUsernameModule { }