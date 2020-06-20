import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product-service';
import { Product } from 'src/app/model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: '.app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  @Input() sno:number;
  @Input() product:Product;
  constructor(private router:Router, private productService:ProductService) { }

  ngOnInit() {
  }
  
  remove()
  {
    this.router.navigate(["/remove-product",this.product.id]);
  }

 
}
