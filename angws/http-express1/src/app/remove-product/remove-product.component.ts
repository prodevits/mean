import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';
import { Product } from '../model/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit,OnDestroy {
  product:Product;
  routeSubs:Subscription;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit() {
    this.routeSubs=this.activatedRoute.params.subscribe(params=>{
      const id=params['id'];
      const subs=this.productService.getProductById(id).subscribe(product=>{
        this.product=product;
        subs.unsubscribe();
      });
    });
  }
  remove(){
    const subs=this.productService.removeProduct(this.product.id).subscribe(response=>{
      console.log(response);      
      this.router.navigateByUrl("/products");
      subs.unsubscribe();
    });
  }
  ngOnDestroy(){
    this.routeSubs.unsubscribe();
  }
}
