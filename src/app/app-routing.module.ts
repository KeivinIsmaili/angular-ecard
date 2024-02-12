import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'homepage', component: HomePageComponent},
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    { path: 'signup', component: SignUpComponent },
    { path: 'catalogue', component: CatalogueComponent},
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}