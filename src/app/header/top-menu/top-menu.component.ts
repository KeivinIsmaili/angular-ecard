import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

  faHome = faHome;

  constructor(private router: Router) {}

  redirectToCatalogue() {
    this.router.navigateByUrl('/catalogue');
  }

}