import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
       
    constructor(private authService:AuthService,private router:Router){
        console.log('---auth guard service---');        
    }

    //    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    canActivate(): boolean{    
        if(!this.authService.isAuth()){
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
}