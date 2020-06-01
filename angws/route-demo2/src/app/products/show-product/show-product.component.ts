import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product-service';

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
  


  edit()
  {
    this.productService.editProduct(this.product);
  }
}
