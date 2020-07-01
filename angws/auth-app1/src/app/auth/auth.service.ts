import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class AuthService{

    private uname:string;
    private token:string;
    
    private login_url="http://localhost:3000/login";
    private logout_url="http://localhost:3000/logout";
   
    private authStatusListener = new Subject<boolean>();
    
    constructor(private httpClient:HttpClient,private router:Router){}

    getToken(){
        return this.token;
    }

    getUname(){
        return this.uname;
    }


    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
      }
      
    login(loginData:{userid:string,password:string}):any{
        this.httpClient.post<{status:string,token:string,uname:string}>(this.login_url,loginData).subscribe((response)=>{
                if(response.status=="SUCCESS"){
                    this.token= response.token;
                    this.uname=response.uname;
                    this.authStatusListener.next(true); 
                    this.router.navigateByUrl("/home") ;
                }                          
        });
    }


    
    logout(){
        this.httpClient.get(this.logout_url).subscribe(response=>{
            this.token=undefined;
            this.uname=undefined;
            this.authStatusListener.next(false); 
            this.router.navigateByUrl("/login");
        });
       
    }


}