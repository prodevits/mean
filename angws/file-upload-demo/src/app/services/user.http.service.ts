import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({providedIn:'root'})
export class UserHttpService{
constructor(private httpClient:HttpClient){}
    baseUrl="http://localhost:3000/";
    url=this.baseUrl+"users";

    saveReg(regData):Observable<string>{
        const form=new FormData();
        form.append("name",regData.name);
        form.append("age",regData.age);
        form.append("photo",regData.photo);         
        return this.httpClient.post<string>(this.url,form);
      
    }

    getAllUsers():Observable<User[]>{
        return this.httpClient.get<User[]>(this.url);
    }

}