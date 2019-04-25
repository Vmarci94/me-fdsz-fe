import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
// import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private localStorageService: LocalStorageService,
              // private jwtHelper: JwtHelperService
  ) { }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.localStorageService.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    // return !this.jwtHelper.isTokenExpired(token);
    return true; // FIXME dummy
  }
}
