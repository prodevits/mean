import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class EmployeeService{
    constructor(private http:HttpClient){}
    
    url1="http://beangate.co.in/indian-states.php";
    url2="http://beangate.co.in/indian-cities.php?state=";
    url3="http://localhost:3000/";

    getStates():Observable<{code:string,name:string}[]>{
        return this.http.get<{code:string,name:string}[]>(this.url1);
    }
    getCities(state:string):Observable<string[]>{
        return this.http.get<string[]>(this.url2+state);
    }

}