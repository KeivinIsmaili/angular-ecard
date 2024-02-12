import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogueModule } from './catalogue/catalogue.module';
import { TopHeaderModule } from './top-header/top-header.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HeaderModule } from './header/header.module';
import { ContainerModule } from './container/container.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CustomInterceptor } from './interceptor/custom.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignUpModule } from './sign-up/sign-up.module';
import { HomepageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    TopHeaderModule,
    CatalogueModule,
    HeaderModule,
    PageNotFoundModule,
    FontAwesomeModule,
    ContainerModule,
    SignUpModule,
    HomepageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }