import {EventEmitter, Injectable, Output} from '@angular/core';
import {LocalStorageService} from './local-storage.service';

// import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})
export class AuthService {

  @Output() public loggedInEmitter: EventEmitter<boolean> = new EventEmitter();

  private loggedStatus = false;

  constructor(private localStorageService: LocalStorageService,
              // private jwtHelper: JwtHelperService
  ) {
  }

  public emitLoggedStatus() {
    this.loggedStatus = !this.loggedStatus;
    this.loggedInEmitter.emit(this.loggedStatus);
  }

  public isLoggedIn(): Readonly<boolean> {
    return this.loggedStatus;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.localStorageService.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    // return !this.jwtHelper.isTokenExpired(token);
    return true; // FIXME dummy
  }
}
