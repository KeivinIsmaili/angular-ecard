import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {

  constructor(private router: Router) {}

  redirectToCatalogue() {
    this.router.navigateByUrl('/catalogue');
  }

}