import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  product = [
    {
      name: 'product 1',
      price: 120000,
      author: 'TTT',
    },

    {
      name: 'product 2',
      price: 500000,
      author: 'ABC',
    },

    {
      name: 'product 3',
      price: 250000,
      author: 'XYZ',
    },
  ];

  getProduct() {
    return this.product;
  }
}
