import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./Employee";

@Injectable({providedIn:'root'})
export class EmpHttpService{
    constructor(private http:HttpClient){}
    urlGet='http://demo.itvidya.in/emps.php';
    urlPost='http://demo.itvidya.in/add-emp-post.php';

   // urlPost='http://localhost:3000';
   // urlGet='http://localhost:3000';
    urlAdd='http://localhost:3000/add?';
    urlGetByID="http://localhost:3000/";
    getEmps():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.urlGet);
    }
    getEmpById(id):Observable<Employee[]>{
        return this.http.get<Employee[]>(this.urlGetByID+id);
    }
    // addEmp(e:Employee):Observable<string>{
    //         return this.http.post<string>(this.urlPost,e);
    // }

    addEmpPost(e:Employee):Observable<string>{
            return this.http.post<string>(this.urlPost,e);
    }


    addEmp(e:Employee):Observable<string>{
        console.log("------------");
        console.log(e);      
        
        let q='';
        for(let k of Object.keys(e)){
            q=q+k+"="+e[k]+"&";
        }
        const addURL=this.urlAdd+q.substr(0,q.length-1);
        return this.http.get<string>(addURL);
}

}