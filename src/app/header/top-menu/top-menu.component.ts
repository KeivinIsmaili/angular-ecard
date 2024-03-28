import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent implements OnInit {

  faHome = faHome;
  
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        styleClass: "split-button"
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

  redirectToCatalogue() {
    this.router.navigateByUrl('/catalogue');
  }

  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>;

  @ViewChild('searchInput') searchInputElement: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    console.log(this.searchInputElement.nativeElement)
    this.searchTextChanged.emit(this.searchText);
  }


}