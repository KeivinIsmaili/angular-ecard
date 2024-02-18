import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
  constructor(private router: Router) {}

  redirectToSignUp() {
    this.router.navigateByUrl('/signup');
  }
  
  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }

  redirectToCatalogue() {
    this.router.navigateByUrl('/catalogue');
  }

}