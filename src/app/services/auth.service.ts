import {EventEmitter, Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

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

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn();
  }

}
