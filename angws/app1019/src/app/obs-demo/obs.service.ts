import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class ObsService{
    messanger():Observable<string>{
        const myObservable:Observable<string> = new Observable(observer => { 
		setTimeout(() => {        
			observer.next('first message');     
		 }, 1000);
		setTimeout(() => {        
			observer.next('next1 message');      
		}, 3000);    
		// setTimeout(() => {     
		//   observer.error('error message');     
		// }, 5000);      
		setTimeout(() => {       
			 observer.next('next2 message');      
		}, 7000);      
		setTimeout(() => {        
			observer.complete();      
        }, 10000);    });
        
        return myObservable;

    }
}