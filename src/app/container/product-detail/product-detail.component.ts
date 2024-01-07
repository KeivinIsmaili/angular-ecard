import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product;
}