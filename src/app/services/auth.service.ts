import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(private router: Router) { }

  login(username:string, password:string){
    if(username === "admin" && password === "admin123"){
      this.isAuthenticated = true;
      this.router.navigate(["/Home"]);
    }else {
      alert("Invalid Credentials")
      this.isAuthenticated = false;
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(["/"]);
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

}

  