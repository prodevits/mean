import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {
  product:Product;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      const id=param['id'];
      this.product=this.productService.getProductById(id);
    });
  }


  remove()
  {
    this.productService.removeProduct(this.product.id);
    this.router.navigateByUrl("/products");
  }

  cancel(){
    this.router.navigateByUrl("/products");
  }
}
