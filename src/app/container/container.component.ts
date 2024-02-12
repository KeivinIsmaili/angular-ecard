import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

  searchText: string = '';

  name = 'John Smith';
  addToCard: number = 0;
  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 5
  }
  listOfStrings: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Sarah']

  //we can use the name of the component
  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  getDiscountedPrice() {
    return this.product.price - this.product.price * this.product.discount / 100
  }
  
  decrementValue() {
    if ( this.addToCard > 0 ) {
      this.addToCard--;
    }
  }

  incrementValue() {
    if ( this.addToCard < this.product.inStock ) {
      this.addToCard++;
    }
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  setSearchText(value) {
    this.searchText = value;
  }

}