import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class UserService{
constructor(private httpClient:HttpClient){    }

baseUrl:string="http://localhost:3000/";
urlUsers=this.baseUrl+"users";
productUrl=this.baseUrl+"products";

private picUpdateListener = new Subject<string>();

getPicUpdateListener(){
    return this.picUpdateListener.asObservable();
}

userid=undefined;
uname=undefined;
profilePic=undefined;

getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.urlUsers).pipe(
        map(users=>{
            if(users!=null && users.length>0){
               users.forEach(user=>{
                    user.profile_pic= this.baseUrl+user.profile_pic;      
                    
               });
               return users;
            }
            return null;
        })
    ); 

}

getMyProfile(){
    return this.httpClient.get<User>(this.urlUsers+"/"+this.userid).pipe(
        map(user=>{
            if(user!=null){
                    user.profile_pic= this.baseUrl+user.profile_pic;     
                    return user;
            }
            return null;
        })
    ); 
}

updateMyProfile(name:string,city:String,mobile_no:string):Observable<{status:string,message:string}>{
    const data={name:name,city:city,mobile_no:mobile_no};
    return this.httpClient.put<{status:string,message:string}>(this.urlUsers+"/"+this.userid,data);
 }

 addUser(user:User):Observable<{status:string,message:string}>{
    return this.httpClient.post<{status:string,message:string}>(this.urlUsers,user);
 }

uploadPhoto(photo:any){
    const form=new FormData();
    form.append("userid",this.userid);
    form.append("photo",photo);  
    return this.httpClient.post<{status:string,message:string,profile_pic:string}>(this.urlUsers+"/upload_profile_photo",form);
}

setProfilePhoto(pic){
this.profilePic=pic;
this.picUpdateListener.next(null);
}

getProfilePhoto(){
return this.baseUrl+this.profilePic;
}

reset(){
   this.userid=undefined;
   this.uname=undefined;
   this.profilePic=undefined;
}

}