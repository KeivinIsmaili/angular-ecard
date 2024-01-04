import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText: string = '';

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

}