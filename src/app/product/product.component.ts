import { Component } from '@angular/core';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any;
  constructor(private productService: ProductService) {
    this.product = productService.getProduct();
  }
}
