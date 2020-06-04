import { Injectable, EventEmitter } from '@angular/core';


@Injectable({providedIn:'root'})
export class ProductService{
    private productList:{id:number,name:string,price:number}[]=[
        {id:1,name:"Nut 3.0 mm",price:2.4},{id:2,name:"Screw 3.0 mm",price:4.5}];
    
    onProductChange:EventEmitter<{id:number,name:string,price:number}[]>= new EventEmitter<{id:number,name:string,price:number}[]>();



    addProduct(product:{id:number,name:string,price:number}){
        this.productList.push(product);
        console.log("one product added");

        const a=[...this.productList];
        this.onProductChange.emit(a);
        
    }

    getProducts(){
        const a=[...this.productList];
        return a;
    }

    removeProduct(id:number){
        const index=this.productList.findIndex((p)=>p.id==id);
        this.productList.splice(index,1);
        const a=[...this.productList];
        this.onProductChange.emit(a);
    }
}