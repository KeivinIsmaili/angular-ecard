import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  //decorator used to pass data between parent and child component
  @Input() product: Product;
}
