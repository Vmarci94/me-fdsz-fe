import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Token} from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly usersServiceUrl: string = '/users';

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              private authService: AuthService,
              private router: Router) {
  }

  public callGetCurrentUser(): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-currnet-user';
    return this.http.get<User>(url);
  }

  public signout() {
    this.localStorageService.deleteToken();
    this.authService.emitLoggedStatus();
    this.router.navigate(['/']);
  }

  // bejelentkezés
  public callSignin(pUser: User): void {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signin';
    this.http.post<Token>(url, pUser, {headers: environment.header}).subscribe(tokenDTO => {
      this.localStorageService.updateToken(tokenDTO.token);
      this.authService.emitLoggedStatus();
      this.router.navigate(['feeds']);
    });
  }

  // regisztráció
  public callSignup(pUser: User): void {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signup';
    this.http.post<User>(url, pUser, {headers: environment.header}).subscribe((user: User) => {
      this.callSignin(user);
    });
  }

  public callGetAllClientUser(): Observable<User[]> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-all-client-user';
    return this.http.get<User[]>(url);
  }

  public callGetAllUser(): Observable<User[]> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-all';
    return this.http.get<User[]>(url);
  }

  public searchUsersByName(searchTerm: string): Observable<User[]> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/search-users-by-name';
    const options = {params: new HttpParams().set('searchTerm', searchTerm)};
    return this.http.get<User[]>(url, options);
  }

}
