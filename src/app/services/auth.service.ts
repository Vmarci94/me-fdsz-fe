import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {LocalStorageService} from './local-storage.service';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private localStorageService: LocalStorageService) {
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.localStorageService.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
