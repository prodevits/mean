import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./Product";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class SpringService{
    onProductsLoad:EventEmitter<Product[]>=new EventEmitter<Product[]>();
    constructor(private http:HttpClient){}
    url="http://localhost:8080/products/";

    getProducts(){    
        this.loadProducts().subscribe( data=>{
            this.onProductsLoad.emit(data);   
            // console.log(data);                               
        });      
    }
    loadProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.url);
    }
    deleteProduct(id){
        this.http.delete<Product[]>(this.url+id).subscribe(data=>{
            console.log(data);
            this.getProducts();
            
        });
    }
    addProduct(product:Product){
//         console.log(product);
        
//         let httpHeaders = new HttpHeaders({
//             'Content-Type' : 'application/json',
//             'Cache-Control': 'no-cache'
//        }); 
//        let options = {
//         headers: httpHeaders
//    }; 
   this.http.post(this.url,product).subscribe(data=>{
       console.log(data);
       this.getProducts();
   });    
 
//this.http.post(this.url+"products/",product,options).subscribe(data=>console.log(data));    
    }
}