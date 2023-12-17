import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  name = 'John Smith';
  addToCard: number = 0;
  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 5,
    image: 'assets/images/iphone-13.jpg'
  }

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

}