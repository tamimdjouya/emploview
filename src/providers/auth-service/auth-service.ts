import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceProvider {
  private isLoggedIn = false;
  public isAdmin = false;

  constructor() {

  }

  login(){
    this.isLoggedIn = true;
  }

  logout(){
    this.isLoggedIn = false;
  }

  authenticated() : boolean{
    return this.isLoggedIn;
  }

  validateAdmin(bool) {
    this.isAdmin = bool;
  }

  validateIfAdmin() {
    return this.isAdmin;
  }

}
