import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>;

  @ViewChild('searchInput') searchInputElement: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    console.log(this.searchInputElement.nativeElement)
    this.searchTextChanged.emit(this.searchText);
  }

}