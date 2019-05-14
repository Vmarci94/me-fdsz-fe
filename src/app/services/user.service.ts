import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import 'rxjs-compat/add/operator/map';
import {Token} from '../model/token';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly usersServiceUrl: string = '/users';

  @Output() public userName: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router,
              private authService: AuthService) {
  }

  public callGetCurrentUser(): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-currnet-user';
    return this.http.get<User>(url);
  }

  public signout() {
    this.localStorageService.deleteToken();
    this.authService.emitLoggedStatus();
  }

  public updateUserData(user: User): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/update-user-data';
    return this.http.post<User>(url, user);
  }

  public getAllClientUser(): Observable<User[]> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-all-client-users';
    return this.http.get<User[]>(url);
  }

  public searchClientUsersByName(fullName: string): Observable<User[]> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-client-users-by-name';
    const options = {params: new HttpParams().set('fullName', fullName)};
    return this.http.get<User[]>(url, options);
  }

  // bejelentkezés
  public callSignin(pUser: User) {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signin';
    this.http.post<Token>(url, pUser, {headers: environment.header}).subscribe(tokenDTO => {
      this.localStorageService.updateToken(tokenDTO.token);
      this.authService.emitLoggedStatus();
      this.router.navigate(['feeds']);
    });
  }

  // regisztráció
  public callSignup(pUser: User): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signup';
    return this.http.post<User>(url, pUser, {headers: environment.header});

    // this.http.post(url, pUser, {headers: environment.header, observe: 'response'}).subscribe(value => {
    //   console.log(value);
    // });
  }

}
