import { Component, OnInit } from '@angular/core';
import { SpringService } from './spring.service';
import { Product } from './Product';

@Component({
  selector: 'app-spring-demo',
  templateUrl: './spring-demo.component.html',
  styleUrls: ['./spring-demo.component.css']
})
export class SpringDemoComponent implements OnInit {
  id:number;
  name:string;
  cprice:number;
  sprice:number;
  qty:number;
  constructor(private service:SpringService) { }

  products:Product[];
  ngOnInit() {
    this.service.onProductsLoad.subscribe(data=>this.products=data);
    this.service.getProducts();
  }

    add(){
      let p=new Product(this.id,this.name,this.cprice,this.qty,this.sprice);
      this.service.addProduct(p);
      this.clear();
    }
    delete(id){
      if(confirm('Sure to Delete?')){
        this.service.deleteProduct(id);
      }
    }
    clear(){
      this.id=undefined;
      this.name=undefined;
      this.cprice=this.sprice=this.qty=undefined;
    }
}
