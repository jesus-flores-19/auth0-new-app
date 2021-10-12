import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router){}
  activado: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    this.auth.isAuthenticated$.subscribe((data: boolean)=>{
      this.activado = data
    })
    if(this.activado){
      return true
    }else{
      this.router.navigate([""])
      return false
    }
  }
  
}
