import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class MyHttpService{
    constructor(private httpClient:HttpClient){}
    private urlStates:string="http://demo.itvidya.in/indian-states.php";
    private urlCities:string="http://demo.itvidya.in/indian-cities.php?state=";
   
    getStates():Observable<State[]>{
     return this.httpClient.get<State[]>(this.urlStates);
    }


    getCities(code:string):Observable<string[]>{
        const url=this.urlCities+code;
        console.log(this.urlCities);        
        return this.httpClient.get<string[]>(this.urlCities);

    }

}