import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit,OnDestroy {
  @ViewChild('pform',{static:true}) pform:NgForm;
  error:string;
  editMode:boolean=false;
  routeSubs:Subscription;
  constructor(private router:Router, private productService:ProductService, private activatedRoute:ActivatedRoute) { }
  ngOnInit() {    
    this.routeSubs=this.activatedRoute.params.subscribe(params=>{
      const id=params['id'];
      if(id){
        const subs=this.productService.getProductById(id).subscribe(product=>{
          this.editMode=true;
          this.pform.setValue(product);
          subs.unsubscribe();
        });
      }          
    });
  }
  
  add(){
    const p=this.pform.value;
    const subs=this.productService.addProduct(p).subscribe((response)=>{
      console.log(response);      
      if(response.status=='success'){
        this.router.navigateByUrl("/products");
      }else{
        this.error=response.message;
      }
      subs.unsubscribe();
    });

  }


  update(){
    const p=this.pform.value;
    const subs=this.productService.updateProduct(p).subscribe((response)=>{
      console.log(response);      
      if(response.status=='success'){
        this.router.navigateByUrl("/products");
      }else{
        this.error=response.message;
      }
      subs.unsubscribe();
    });
    
  }


ngOnDestroy(){
  this.routeSubs.unsubscribe();
}
}
