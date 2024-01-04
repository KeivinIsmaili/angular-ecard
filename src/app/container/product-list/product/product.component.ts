import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  //decorator used to pass data between parent and child component
  @Input()
  product: {
    id: number, 
    name: string, 
    description: string,
    brand: string,
    gender: string,
    category: string,
    size: number,
    color: string,
    price: number,
    //? makes our property optional
    discountPrice?: number,
    is_in_inventory: boolean,
    items_left: number,
    image_url: string
  };
}
