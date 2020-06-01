import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private productService:ProductService) { 
    this.products=this.productService.getProducts();
  }

  ngOnInit() {
  this.productService.onProductChange.subscribe((data:Product[])=>{
    this.products=data;
  });
  }  
}
