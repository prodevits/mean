import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class AuthService {
    private login_url = "http://localhost:3000/login";
    private logout_url = "http://localhost:3000/logout";

    private token:string;

    getToken(){
        return this.token;
    }

    private authStatusListener = new Subject<boolean>();

    constructor(private httpClient: HttpClient, private router: Router,private userService:UserService) { }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    login(loginData: { userid: string, password: string }): any {
        this.httpClient.post<{ status: string, token: string, uname: string,userid:string,profile_pic:string,role:string }>(this.login_url, loginData).subscribe((response) => {
            console.log(response); 
            if (response.status == "SUCCESS") { 
                this.token= response.token;        
                this.userService.userid=response.userid;  
                this.userService.uname=response.uname;
                this.userService.profilePic=response.profile_pic;
                this.userService.role=response.role;
                this.authStatusListener.next(true);
                this.router.navigateByUrl("/user-home");
            }
        });
    }

    logout() {
        this.httpClient.get(this.logout_url).subscribe(response=>{
            this.authStatusListener.next(false);
            this.token=undefined;
            this.router.navigateByUrl("/login");
            this.userService.reset();
        });
           
    }

    isAuth():boolean{
        return this.token!=undefined;
    }
    isAdmin(){
        return this.userService.role.toUpperCase()=='ADMIN';
    }
}