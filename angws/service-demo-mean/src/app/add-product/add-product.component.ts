import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    id:number;
    name:string;
    price:number;
    constructor(private service:ProductService) { }
    ngOnInit(){      
    }
    add(){
      const p={id:this.id,name:this.name,price:this.price};
      console.log(p);   
      this.service.addProduct(p);      
    }
}