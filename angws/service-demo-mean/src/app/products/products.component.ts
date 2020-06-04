import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:{id:number,name:string,price:number}[];

  constructor(private service:ProductService) { 
    this.products=service.getProducts();
  }

  ngOnInit() {
    this.service.onProductChange.subscribe((data)=>{
      this.products=data;
    });
  }


  remove(id:number){
    this.service.removeProduct(id);
  }
}
