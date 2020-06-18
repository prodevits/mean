import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class ProductService{
private productsList:Product[]=[];

onProductChange:EventEmitter<Product[]>=new EventEmitter<Product[]>();
onProductEdit:EventEmitter<Product>=new EventEmitter<Product>();

constructor(private httpClient:HttpClient){}
baseUrl:string="http://localhost:3000/";
urlProducts=this.baseUrl+"products";


getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlProducts);   
}

addProduct(product:Product):Observable<{status:string,message:string}>{
   return this.httpClient.post<{status:string,message:string}>(this.urlProducts,product);
}

getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.urlProducts+"/"+id);
}


updateProduct(product:Product):Observable<{status:string,message:string}>{
 return this.httpClient.put<{status:string,message:string}>(this.urlProducts+"/"+product.id,product);
}


removeProduct(id:number):Observable<{status:string,message:string}>{
  return this.httpClient.delete<{status:string,message:string}>(this.urlProducts+"/"+id);
}

isIdUsed(id:number){
    return this.productsList.some((p)=>p.id==id);
}

editProduct(product){
this.onProductEdit.emit(product);
}
}