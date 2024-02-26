import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecoverUsernameComponent } from './recover/username/recover-username.component';
import { RecoverPasswordComponent } from './recover/password/recover-password.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'username', component: RecoverUsernameComponent },
    { path: 'password', component: RecoverPasswordComponent },
    { path: 'catalogue', component: CatalogueComponent},
    { path: '', component: HomePageComponent},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}