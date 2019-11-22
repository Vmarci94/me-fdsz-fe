import {EventEmitter, Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInEmitter: EventEmitter<boolean> = new EventEmitter();

  private loggedStatus = false;

  constructor(private localStorageService: LocalStorageService) {
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
