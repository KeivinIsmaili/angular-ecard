import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './sign-up.component';
import { MatIcon } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        FontAwesomeModule,
        ToastrModule,
        MatIcon,
        MatInputModule
    ],
    providers: [],
    exports: [
        SignUpComponent
    ]
})
export class SignUpModule { }