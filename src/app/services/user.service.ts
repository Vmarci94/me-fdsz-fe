import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Token} from '../model/token';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly usersServiceUrl: string = '/users';

  public userAdmin = false;
  private userData: User;

  public eventChangeCurrentUser: Subject<User> = new Subject();

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              private authService: AuthService,
              private router: Router) {
  }


  public emitCurrentUser(): Observable<User> {
    return this.eventChangeCurrentUser.asObservable();
  }

  public callGetCurrentUser() {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-current-user';
    this.http.get<User>(url).subscribe((data) => {
      this.eventChangeCurrentUser.next(data);
      this.userAdmin = data.admin;
      this.userData = data;
    });
  }

  public callGetUserById(userId: number): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-by-id';
    const options = {params: new HttpParams().set('userId', '' + userId)};
    return this.http.get<User>(url, options);
  }


  public callUpdateUserData(userData: User, image: File): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/update-user-data';
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const blob = new Blob([JSON.stringify(userData)], {type: 'application/json'});
    fd.append('user', blob);
    return this.http.post<User>(url, fd);
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

  public delete(userId: number): Observable<boolean> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/delete';
    const options = {params: new HttpParams().set('userId', '' + userId)};
    return this.http.delete<boolean>(url, options);
  }
}
