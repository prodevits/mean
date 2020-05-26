import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name:string;
  price:number;

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }


  add(){
    const p={name:this.name,price:this.price};
    console.log(p);    
    this.productService.addProduct(p);
  }

}
