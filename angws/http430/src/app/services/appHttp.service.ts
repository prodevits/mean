import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../models/state.model';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class AppHttpService {
    private statesUrl = "http://demo.itvidya.in/indian-states.php";
    private citiesUrl = "http://demo.itvidya.in/indian-cities.php?state=";
    private empsUrl="http://demo.itvidya.in/emps.php";



    constructor(private httpClient: HttpClient) { }


    getStates(): Observable<State[]> {
        return this.httpClient.get<State[]>(this.statesUrl);
    }

    getCities(stateCode: string): Observable<string[]> {
        const url = this.citiesUrl + stateCode;
        return this.httpClient.get<string[]>(url);
    }


    getEmployee():Observable<Employee[]>{
        return this.httpClient.get<Employee[]>(this.empsUrl);
    }
}