import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

  sidebarVisible: boolean = false;


  ngOnInit() {}

  onActiveItemChange() {
  }

  activateLast() {
  }

}
