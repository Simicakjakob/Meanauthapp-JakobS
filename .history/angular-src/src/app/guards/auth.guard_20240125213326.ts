import {Injectable} from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';



@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}
        
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authService.loggedIn()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}