import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../models/bill.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item.model';

@Injectable({providedIn:'root'})
export class BillHttpService{
    private baseUrl="http://localhost:3000/";
    private billUrl=this.baseUrl+"bill";

    constructor(private httpClient:HttpClient){}

    saveBill(bill:Bill):Observable<{status:string,message:any}>{
          
        return this.httpClient.post<{status:string,message:any}>(this.billUrl,bill);
    }

    search(billNo:number):Observable<Bill>{
            return this.httpClient.get<any>(this.billUrl+`/${billNo}`).pipe(
                map( response=>{
                    if(response.status=='SUCCESS'){                   
                    const data=response.data;
                    const bill:Bill=new Bill();
                    bill.billno=data.billno;
                    bill.customerName=data.customerName;
                    bill.contact=data.contact;
                    bill.billDate=data.billDate;
                    bill.billAmount=data.billAmount;
                    for(let e of data.items){
                        const item=new Item(e.itemNo,e.name,e.price,e.qty) ;
                        bill.addItem(item);
                    }
                    return bill;
                }
                else{
                    return null;
                }
                })
            );
    }
}