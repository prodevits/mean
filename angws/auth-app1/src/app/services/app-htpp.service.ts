import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class AppHttpService{
constructor(private htppClient:HttpClient){}
baseUrl="http://localhost:3000/";


demo1():Observable<{message:string}>{
return this.htppClient.get<{message:string}>(this.baseUrl+"demo1");
}


}