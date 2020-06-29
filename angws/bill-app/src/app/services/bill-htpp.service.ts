import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../models/bill.model';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class BillHttpService{
    private baseUrl="http://localhost:3000/";
    private postBillUrl=this.baseUrl+"bill";

    constructor(private httpClient:HttpClient){}

    saveBill(bill:Bill):Observable<{status:string,message:any}>{
        console.log(this.postBillUrl);
        
        return this.httpClient.post<{status:string,message:any}>(this.postBillUrl,bill);
    }
}