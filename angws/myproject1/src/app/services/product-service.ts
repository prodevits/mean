import { EventEmitter } from '@angular/core';

export class ProductService{
private productsList:{name:string,price:number}[]=[{name:"Nut 3.0 mm",price:2.4},{name:"Screw 3.0 mm",price:4.5}];

onProductChange:EventEmitter<{name:string,price:number}[]>=new EventEmitter<{name:string,price:number}[]>();
getProducts(){
    const pl=[...this.productsList];
    return pl;
   // return this.productsList;
}

addProduct(product:{name:string,price:number}){
    this.productsList.push(product);
    this.onProductChange.emit(this.productsList);    
}
removeProduct(index:number){
    this.productsList.splice(index,1);
    this.onProductChange.emit(this.productsList);
}

}