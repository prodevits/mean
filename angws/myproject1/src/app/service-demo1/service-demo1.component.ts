import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-service-demo1',
  templateUrl: './service-demo1.component.html',
  styleUrls: ['./service-demo1.component.css'],
  providers:[ProductService]
})
export class ServiceDemo1Component implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  products(){
return this.productService.getProducts();
  }
}
