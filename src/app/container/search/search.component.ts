import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>;

  updateSearchText(inputElement: HTMLInputElement) {
    this.searchText = inputElement.value;
    this.searchTextChanged.emit(this.searchText);
  }

  onSearchTextChanged() {
  }

}