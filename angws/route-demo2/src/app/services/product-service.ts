import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({providedIn:'root'})
export class ProductService{
private productsList:Product[]=[{id:1,name:"Nut 3.0 mm",price:2.4},{id:2,name:"Screw 3.0 mm",price:4.5}];
onProductChange:EventEmitter<Product[]>=new EventEmitter<Product[]>();
onProductEdit:EventEmitter<Product>=new EventEmitter<Product>();
getProducts(){
    const pl=[...this.productsList];
    return pl;
   // return this.productsList;
}

getProductById(id:number):Product{
    const p=this.productsList.find((e)=>e.id==id);
    return p;
}

addProduct(product:Product){
    this.productsList.push(product);
    this.onProductChange.emit([...this.productsList]);    
}

updateProduct(product:Product){
    const index=this.productsList.findIndex((p)=>p.id==product.id);
    this.productsList[index]=product;
    this.onProductChange.emit([...this.productsList]);    
}


removeProduct(id:number){
    const index=this.productsList.findIndex((p)=>p.id==id);
    this.productsList.splice(index,1);
    this.onProductChange.emit([...this.productsList]);
}

isIdUsed(id:number){
    return this.productsList.some((p)=>p.id==id);
}

editProduct(product){
this.onProductEdit.emit(product);
}
}