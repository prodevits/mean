import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../model/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  products:Product[];
  subs:Subscription;
  
  constructor(private productService:ProductService) {
  }  
  ngOnInit() {
  this.subs=this.productService.getProducts().subscribe((data:Product[])=>{
    this.products=data;
  });
  }  

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
