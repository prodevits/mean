import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product-service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: '.app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  @Input() product:Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  
  remove()
  {
    this.productService.removeProduct(this.product.id);
  }

  edit()
  {
    this.productService.editProduct(this.product);
  }
}
