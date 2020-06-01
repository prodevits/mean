import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id:number;
  name:string;
  price:number;
  idError:string;
  editMode:boolean=false;

  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      this.id=param.id;
      const p=this.productService.getProductById(this.id);
      this.name=p.name;
      this.price=p.price;
      this.editMode=true;      
    });
  }
  
  add(){
    if(this.productService.isIdUsed(this.id)){
      this.idError="Duplicate ID"
    }else{
      const p={id:this.id,name:this.name,price:this.price}; 
      this.productService.addProduct(p);
     // this.clear();
      this.router.navigateByUrl("/products");
    }
  }


  update(){
      const p={id:this.id,name:this.name,price:this.price}; 
      this.productService.updateProduct(p);
    //  this.editMode=false;
    //  this.clear();   
      this.router.navigateByUrl("/products");
  }

cancel(){
  //this.editMode=false;
 // this.clear();

  this.router.navigateByUrl("/products");
}

clear(){
  this.id=null;
  this.name=null;
  this.price=null;
  this.idError=null; 
}
}
