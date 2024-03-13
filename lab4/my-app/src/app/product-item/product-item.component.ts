import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from "../products";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() remove = new EventEmitter();

  likeCount: number;

  constructor() {
    this.likeCount = 0;

    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      image: '',
      address: '',
      rating: '',
      like: 0,
      link: ''  
    };
  }

  like(product: Product): void {
    product.like++;
  }
}

